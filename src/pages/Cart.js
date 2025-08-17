import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, total, dispatch } = useCart();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-pacifico text-brandGold mb-6">Your Cart</h1>
      {items.length === 0 && <p>Cart is empty. <Link className="text-brandPink" to="/shop">Go shopping</Link></p>}
      <ul className="space-y-4">
        {items.map(i => (
          <li key={i.id} className="flex gap-4 items-center bg-white shadow p-4 rounded">
            {i.image && <img src={i.image} alt={i.name} className="w-20 h-20 object-cover rounded" />}
            <div className="flex-1">
              <h3 className="font-semibold">{i.name}</h3>
              <p className="text-sm text-gray-500">₹{i.price}</p>
              <input type="number" min={1} value={i.qty} onChange={e => dispatch({ type: 'QTY', id: i.id, qty: +e.target.value })} className="border w-20 mt-2 px-2 py-1" />
            </div>
            <button className="text-red-500" onClick={() => dispatch({ type: 'REMOVE', id: i.id })}>Remove</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
          <Link to="/checkout" className="bg-brandPink text-white px-6 py-3 rounded">Checkout</Link>
        </div>
      )}
    </div>
  );
}
