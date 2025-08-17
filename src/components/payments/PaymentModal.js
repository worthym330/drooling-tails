import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useCart } from '../../context/CartContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '');

const CheckoutForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { total, items, dispatch } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError('');
    try {
      // create payment intent
      const intentRes = await fetch('/api/payments/stripe/create-intent', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: total }) });
      const { clientSecret, error: apiErr } = await intentRes.json();
      if (apiErr) throw new Error(apiErr);
      const result = await stripe.confirmCardPayment(clientSecret, { payment_method: { card: elements.getElement(CardElement) } });
      if (result.error) throw new Error(result.error.message);
      await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: items.map(i => ({ productId: i.id, qty: i.qty, price: i.price })), customer: { name: 'Stripe User' }, paymentProvider: 'stripe' }) });
      dispatch({ type: 'CLEAR' });
      onClose(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handlePay} className="space-y-4" aria-label="Stripe payment form">
      <CardElement className="p-3 border rounded bg-white" options={{ hidePostalCode: true }} />
      {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
      <button disabled={loading || !stripe} className="w-full bg-brandPink text-white py-3 rounded disabled:opacity-50" aria-busy={loading}>{loading ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}</button>
    </form>
  );
};

const PaymentModal = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-24 right-6 bg-brandGold text-white px-4 py-2 rounded shadow" aria-haspopup="dialog" aria-expanded={open}>Pay Now</button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-brandInk p-6 rounded-xl w-full max-w-md shadow-card relative">
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-sm" aria-label="Close payment modal">✕</button>
            {!success ? (
              <Elements stripe={stripePromise}>
                <h2 className="text-xl font-semibold mb-4">Secure Payment</h2>
                <CheckoutForm onClose={(ok) => { if (ok) setSuccess(true); else setOpen(false); }} />
              </Elements>
            ) : (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-pacifico text-brandGold">Payment Success!</h2>
                <p>Your order has been placed.</p>
                <button onClick={() => { setOpen(false); setSuccess(false); }} className="bg-brandPink text-white px-4 py-2 rounded">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
