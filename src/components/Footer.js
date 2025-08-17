import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
  
    try {
      await addDoc(collection(db, 'subscribers'), {
        email,
        timestamp: serverTimestamp(),
      });
      setMessage('Thank you for subscribing! You will receive updates soon.');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error.message);
      setMessage('An error occurred. Please try again.');
    }
  };
  

  return (
    // Using inline style with process.env.PUBLIC_URL avoids webpack css-loader trying to resolve /footer-bg.png as a module.
    <footer style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/footer-bg.png)` }} className="mt-16 bg-no-repeat bg-cover bg-center text-[#333]">
      <div className="container py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">WORKING HOURS</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li>Mon - Fri: 11:00 am - 09:00 pm</li>
            <li>Saturday: 11:00 am - 09:00 pm</li>
            <li>Sunday: 11:00 am - 09:00 pm</li>
          </ul>
        </div>
        <div className="text-center">
          <img className="w-24 mb-4 mx-auto" src="/footerlogo.png" alt="Drooling Tails Logo" />
          <p className="text-sm italic">The Best Part? It's Pooch Approved!!</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4">SUBSCRIBE</h3>
          <p className="text-sm mb-3 opacity-90">Get latest updates and offers.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-3 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brandPink/40" />
            <button type="submit" className="px-4 py-2 bg-brandPink text-white rounded shadow hover:shadow-md text-sm">Send</button>
          </form>
          {message && <p className="text-xs mt-2">{message}</p>}
        </div>
      </div>
      <div className="border-t border-brandPink/30">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} Drooling Tails. All rights reserved.</p>
          <p className="flex items-center gap-3 mt-2 md:mt-0">
            <Link to="/privacy-terms" className="hover:text-brandPink transition">Privacy & Terms</Link>
            <a href="https://maps.app.goo.gl/rFjZfPZSe8xGwAoa8" target="_blank" rel="noopener noreferrer" className="hover:text-brandPink transition">Site Map</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
