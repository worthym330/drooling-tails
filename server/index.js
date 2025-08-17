// Express backend for Drooling Tails
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const Razorpay = require('razorpay');
const Stripe = require('stripe');
const { randomUUID } = require('crypto');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Firebase Admin initialization
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON || '{}');
  if (serviceAccount.project_id) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } else {
    console.warn('Firebase admin not initialized - missing service account JSON');
  }
}
const db = admin.apps.length ? admin.firestore() : null;

// Payment providers (optional based on keys)
let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
}
let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe.Stripe ? new Stripe.Stripe(process.env.STRIPE_SECRET_KEY) : new Stripe(process.env.STRIPE_SECRET_KEY);
}

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Products
app.get('/api/products', async (req, res) => {
  try {
    if (!db) return res.json({ products: [] });
    const snap = await db.collection('products').get();
    const products = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    res.json({ products });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { name, description, price, images = [], stock = 0 } = req.body;
    if (!db) return res.status(500).json({ error: 'DB not ready' });
    const doc = await db.collection('products').add({ name, description, price, images, stock, createdAt: Date.now() });
    res.status(201).json({ id: doc.id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Orders
app.post('/api/orders', async (req, res) => {
  try {
    const { items, customer, paymentProvider } = req.body; // items: [{productId, qty, price}]
    const amount = items.reduce((s, i) => s + i.price * i.qty, 0);
    const orderData = { items, customer, amount, status: 'pending', paymentProvider, createdAt: Date.now() };
    if (!db) return res.status(500).json({ error: 'DB not ready' });
    const ref = await db.collection('orders').add(orderData);
    res.status(201).json({ orderId: ref.id, clientSecret: null });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Payment intents (Stripe)
app.post('/api/payments/stripe/create-intent', async (req, res) => {
  try {
    if (!stripe) return res.status(400).json({ error: 'Stripe not configured' });
    const { amount, currency = 'inr' } = req.body;
    const intent = await stripe.paymentIntents.create({ amount: Math.round(amount * 100), currency, automatic_payment_methods: { enabled: true } });
    res.json({ clientSecret: intent.client_secret });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Stripe intent failed' });
  }
});

// Razorpay order
app.post('/api/payments/razorpay/order', async (req, res) => {
  try {
    if (!razorpay) return res.status(400).json({ error: 'Razorpay not configured' });
    const { amount, currency = 'INR' } = req.body;
    const order = await razorpay.orders.create({ amount: Math.round(amount * 100), currency, receipt: randomUUID() });
    res.json(order);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Razorpay order failed' });
  }
});

// Admin basic stats
app.get('/api/admin/stats', async (req, res) => {
  try {
    if (!db) return res.json({ products: 0, orders: 0, revenue: 0 });
    const [productsSnap, ordersSnap] = await Promise.all([
      db.collection('products').get(),
      db.collection('orders').get()
    ]);
    const revenue = ordersSnap.docs.reduce((s, d) => s + (d.data().amount || 0), 0);
    res.json({ products: productsSnap.size, orders: ordersSnap.size, revenue });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed stats' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API server running on :${PORT}`));
