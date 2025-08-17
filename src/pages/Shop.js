import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();
  useEffect(() => { (async () => { const r = await fetch('/api/products'); const d = await r.json(); setProducts(d.products || []); setLoading(false); })(); }, []);
  return (
    <div className="container py-section">
      <h2 className="text-brandGold font-pacifico text-4xl text-center mb-14">Shop Treats</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading && Array.from({length:6}).map((_,i)=>(
          <div key={i} className="animate-pulse bg-white rounded-xl shadow-card p-5">
            <div className="h-48 bg-brandPinkLight/60 rounded-lg mb-4" />
            <div className="h-4 bg-brandPinkLight/60 rounded w-2/3 mb-2" />
            <div className="h-3 bg-brandPinkLight/60 rounded w-full mb-1" />
            <div className="h-3 bg-brandPinkLight/60 rounded w-5/6 mb-4" />
            <div className="h-8 bg-brandPinkLight/60 rounded" />
          </div>))}
        {!loading && products.map(p => (
          <div key={p.id} className="group bg-white rounded-xl shadow-card overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow">
            <div className="relative">
              {p.images?.[0] && <img src={p.images[0]} alt={p.name} className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform" />}
              <button onClick={() => dispatch({ type: 'ADD', item: { id: p.id, name: p.name, price: p.price, qty: 1, image: p.images?.[0] } })} className="absolute bottom-3 right-3 bg-brandPink text-white text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">Add to Cart</button>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-brandGold font-pacifico text-2xl mb-2 leading-snug"><Link to={`/product/${p.id}`}>{p.name}</Link></h3>
              <p className="text-brandBlue/70 text-sm line-clamp-3 mb-4 flex-1">{p.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-brandPink font-bold">₹{p.price}</p>
                <Link to={`/product/${p.id}`} className="text-xs font-medium text-brandPink hover:underline">Details →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
