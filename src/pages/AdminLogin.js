import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const { login, user } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await login(form.email, form.password);
      navigate('/admin');
    } catch (e) { setError(e.message); }
    setLoading(false);
  };

  if (user) return <div className="container py-section">Already logged in.</div>;

  return (
    <div className="container py-section max-w-md">
      <h1 className="text-3xl font-pacifico text-brandGold mb-6">Admin Login</h1>
      <form onSubmit={submit} className="space-y-4" aria-label="Admin login form">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Password</span>
          <input required type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="mt-1 w-full border rounded px-3 py-2" />
        </label>
        {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
        <button disabled={loading} className="bg-brandPink text-white px-6 py-3 rounded disabled:opacity-50" aria-busy={loading}>{loading? 'Signing in...' : 'Login'}</button>
      </form>
    </div>
  );
}
