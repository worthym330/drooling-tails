import React from 'react';

const products = [
  { img: '/p2.jpeg', title: 'Yummy Dog Cake', desc: 'Delicious and nutritious cake made with love for your furry friend. Available in various flavors!', price: '250.00' },
  { img: '/p1.jpeg', title: 'Chewy Dog Biscuits', desc: 'Crunchy and tasty biscuits perfect for training and rewarding your dog. Made with wholesome ingredients.', price: '300.00' },
  { img: '/p3.jpeg', title: 'Doggie Ice Cream', desc: 'Cool down your pup with our special dog-friendly ice cream. Available in multiple flavors!', price: '150.00' },
  { img: '/p4.jpeg', title: 'Healthy Dog Treats', desc: 'Nutrient-packed treats that your dog will love. Great for maintaining a healthy diet.', price: '180.00' },
  { img: '/p5.jpeg', title: 'Custom Dog Cakes', desc: "Order a personalized cake for your dog's special day. Customizable designs and flavors!", price: '350.00' },
  { img: '/p6.jpeg', title: 'Dog Treat Sampler', desc: 'Try a variety of our best-selling treats in one sampler pack. Great for picky eaters!', price: '300.00' },
  { img: '/p7.jpeg', title: 'Birthday Pupcakes', desc: "Celebrate your dog's birthday with our specially decorated pupcakes. Fun and tasty!", price: '280.00' },
  { img: '/p8.jpeg', title: 'Gourmet Dog Chews', desc: 'High-quality chews made from premium ingredients. Perfect for keeping your dog entertained.', price: '220.00' },
  { img: '/p14.jpeg', title: 'Seasonal Dog Treats', desc: 'Special treats available for holidays and seasons. Limited editions and festive flavors!', price: '180.00' }
];

const Products = () => (
  <div className="p-10 bg-[#f8f8f8]">
    <h2 className="text-brandGold font-pacifico text-4xl text-center mb-10">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {products.map(p => (
        <div key={p.title} className="bg-white rounded-lg shadow-md overflow-hidden text-center p-8 transition-transform duration-300 cursor-pointer hover:scale-105">
          <img src={p.img} alt={p.title} className="w-4/5 h-[400px] rounded-lg mb-4 object-cover mx-auto" />
          <h3 className="text-brandGold font-pacifico text-2xl mb-2">{p.title}</h3>
          <p className="text-brandPink font-sans text-base leading-relaxed">{p.desc}</p>
          <p className="text-brandPink font-sans text-lg font-bold mt-2">{p.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
