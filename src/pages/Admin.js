import React, { useEffect, useState } from 'react';

export default function Admin() {
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', images: '' });

  const load = async () => {
    const s = await fetch('/api/admin/stats').then(r => r.json());
    setStats(s);
    const p = await fetch('/api/products').then(r => r.json());
    setProducts(p.products || []);
  };
  useEffect(() => { load(); }, []);

  const add = async () => {
    const payload = { ...form, price: +form.price, images: form.images.split(',').map(s => s.trim()).filter(Boolean) };
    const res = await fetch('/api/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) { setForm({ name: '', description: '', price: '', images: '' }); load(); }
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-pacifico text-brandGold">Admin Panel</h1>
      {stats && <div className="flex gap-6">{['products','orders','revenue'].map(k => <div key={k} className="bg-white p-4 rounded shadow"><p className="uppercase text-xs text-gray-500">{k}</p><p className="text-xl font-bold">{stats[k]}</p></div>)}</div>}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold mb-2">Add Product</h2>
          <input className="border w-full p-2 mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <textarea className="border w-full p-2 mb-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
          <input className="border w-full p-2 mb-2" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
            <input className="border w-full p-2 mb-2" placeholder="Image URLs (comma separated)" value={form.images} onChange={e=>setForm({...form,images:e.target.value})} />
          <button onClick={add} className="bg-brandPink text-white px-6 py-2 rounded">Add</button>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Products</h2>
          <ul className="space-y-3 max-h-[400px] overflow-auto pr-2">
            {products.map(p => <li key={p.id} className="bg-white p-3 rounded shadow text-sm"><p className="font-semibold">{p.name} <span className="text-gray-400">₹{p.price}</span></p><p className="truncate">{p.description}</p></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
