import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items, total, dispatch } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: items.map(i => ({ productId: i.id, qty: i.qty, price: i.price })), customer: form, paymentProvider: 'cod' }) });
      if (!res.ok) throw new Error('Order failed');
      dispatch({ type: 'CLEAR' });
      navigate('/order-success');
    } catch (e) { console.error(e); alert('Failed to place order'); }
    setLoading(false);
  };

  if (!items.length) return <div className="p-6">Cart empty.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-pacifico text-brandGold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block mb-4">Name<input className="border w-full p-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
          <label className="block mb-4">Email<input className="border w-full p-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
          <label className="block mb-4">Address<textarea className="border w-full p-2" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} /></label>
          <button disabled={loading} onClick={placeOrder} className="bg-brandPink text-white px-6 py-3 rounded disabled:opacity-50">{loading ? 'Placing...' : 'Place Order (COD)'}</button>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Summary</h2>
          <ul className="space-y-2 text-sm">
            {items.map(i => <li key={i.id}>{i.name} x {i.qty} = ₹{(i.price * i.qty).toFixed(2)}</li>)}
          </ul>
          <p className="mt-4 font-bold">Total: ₹{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
