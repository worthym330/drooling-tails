import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact.js'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const PrivacyTerms = lazy(() => import('./pages/PrivacyTerms'));
const Admin = lazy(() => import('./pages/Admin'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTheme } from './context/ThemeContext';
import PaymentModal from './components/payments/PaymentModal';
import StructuredData from './components/seo/StructuredData';
import { AuthProvider, Protected } from './auth/AuthContext';
import WhatsAppButton from './components/WhatsAppButton';
import Breadcrumbs from './components/Breadcrumbs';
// Tailwind styles are imported via index.css

const ThemeToggle = () => {
  const { dark, toggle } = useTheme();
  return <button onClick={toggle} className="fixed bottom-6 left-6 bg-brandPink text-white px-4 py-2 rounded shadow text-xs">{dark ? 'Light' : 'Dark'} Mode</button>;
};

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <AuthProvider>
      <CartProvider>
        <Router>
          <Helmet>
            <title>Drooling Tails | Handmade Dog Bakery</title>
            <meta name="description" content="Wholesome handmade dog treats & cakes. Fresh, safe, and pooch approved." />
          </Helmet>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brandPink text-white px-3 py-2 rounded">Skip to content</a>
          <Header />
          <Breadcrumbs />
          <Suspense fallback={<div className="p-10" role="status" aria-live="polite">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/privacy-terms" element={<PrivacyTerms />} />
              <Route path="/admin" element={<Protected><Admin /></Protected>} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
          <ThemeToggle />
          <PaymentModal />
          <StructuredData />
        </Router>
  </CartProvider>
  </AuthProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
