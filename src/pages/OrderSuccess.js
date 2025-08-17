import React from 'react';
import { Link } from 'react-router-dom';
export default function OrderSuccess() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-pacifico text-brandGold mb-4">Woof! Order Placed 🐾</h1>
      <p className="mb-6">Thank you for ordering from Drooling Tails. We'll fetch it right away!</p>
      <Link to="/shop" className="bg-brandPink text-white px-6 py-3 rounded">Continue Shopping</Link>
    </div>
  );
}
