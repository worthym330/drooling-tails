import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProduct((data.products || []).find(p => p.id === id));
    };
    load();
  }, [id]);

  if (!product) return <div className="container py-section">Loading...</div>;

  return (
    <div className="container py-section grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-4">
        {product.images?.[0] && <img src={product.images[0]} alt={product.name} className="w-full h-[520px] object-cover rounded-3xl shadow-card" />}
        {product.images?.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.slice(1).map((img,i)=>(<img key={i} src={img} alt={product.name+' alt '+i} className="h-24 w-24 object-cover rounded-lg shadow-sm" />))}
          </div>
        )}
      </div>
      <div>
        <h1 className="text-4xl font-pacifico text-brandGold mb-4 leading-tight">{product.name}</h1>
        <p className="text-brandBlue/70 leading-relaxed mb-6 max-w-prose">{product.description}</p>
        <div className="flex items-center gap-6 mb-8">
          <p className="text-3xl font-bold text-brandPink">₹{product.price}</p>
          <button onClick={() => dispatch({ type: 'ADD', item: { id: product.id, name: product.name, price: product.price, qty: 1, image: product.images?.[0] } })} className="bg-brandPink text-white px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition text-sm font-semibold">Add to Cart</button>
        </div>
        <div className="prose prose-sm max-w-none text-brandBlue/80">
          <h3>Why dogs love it</h3>
          <ul>
            <li>Wholesome, dog-safe ingredients</li>
            <li>Freshly baked to order</li>
            <li>No artificial preservatives</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
