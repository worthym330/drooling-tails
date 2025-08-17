import React from 'react';

export default function WhatsAppButton() {
  const number = process.env.REACT_APP_WHATSAPP_NUMBER || '910000000000';
  const msg = encodeURIComponent('Hi Drooling Tails! I have a question.');
  return (
    <a href={`https://wa.me/${number}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg px-5 py-3 font-semibold hover:scale-105 transition">
      WhatsApp Us
    </a>
  );
}
