import React from 'react';

const About = () => (
  <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-[#f8f8f8] gap-5">
    <div className="flex-1 pr-5 text-left">
  <h2 className="text-brandBlue font-pacifico text-4xl mb-5">About Us</h2>
  <p className="text-brandBlue text-lg leading-relaxed mb-5">Drooling Tails pet bakery was started by our fussy eater Chef Nemo and his clumsy hooman in her 20s. We specialize in creating pretty and droolicious treats for your pooches 🍕🧁. Every ingredient we use is dog-safe and of high-quality human grade. As a HOME BASED bakery, please contact us 2-3 days prior to place an order 💌.</p>
  <p className="text-brandBlue text-lg leading-relaxed mb-5">Our story began with a passion for baking and a love for dogs. What started as a small experiment quickly turned into a thriving business. We pride ourselves on using only the finest ingredients and crafting each treat with love and care.</p>
  <p className="text-brandBlue text-lg leading-relaxed mb-5">At Drooling Tails, we believe in:</p>
      <ul className="text-brandPink font-pacifico text-lg leading-relaxed list-disc ml-5 mb-5">
        <li>Using only the finest and safest ingredients for your pets.</li>
        <li>Creating custom cakes and treats tailored to your dog's preferences and dietary needs.</li>
        <li>Offering a variety of flavors and designs to choose from.</li>
        <li>Providing exceptional customer service and ensuring satisfaction with every order.</li>
        <li>Continuously innovating and improving our recipes to ensure the best for your furry friends.</li>
      </ul>
  <p className="text-brandBlue text-lg leading-relaxed mb-5">Our mission is to spread joy and health through our delicious and nutritious treats. Every wag of the tail and happy bark we receive is a testament to our commitment. Thank you for supporting our small business and being a part of the Drooling Tails family!</p>
    </div>
    <div className="flex-1 pl-5 text-center">
      <iframe className="w-full h-[300px] border-0 rounded-lg" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="About Us Video"></iframe>
    </div>
  </div>
);

export default About;
