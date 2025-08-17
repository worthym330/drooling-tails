import React from 'react';

const Carousel = () => {
  // Sample slides data
  const slides = [
    { 
      id: 1, 
      name: 'Pupcakes', 
      image: '/c1.jpg', 
      quote: 'For happy tails and wagging smiles!' 
    },
    { 
      id: 2, 
      name: 'Biscuits', 
      image: '/c2.jpg', 
      quote: 'Pawsitively Delicious Treats for Your Furry Friend!' 
    },
    { 
      id: 3, 
      name: 'Bites', 
      image: '/c3.jpg', 
      quote: 'Delicious Bites for Happy Pets!' 
    }
  ];

  return (
    <div className="w-full h-[400px] mx-auto overflow-hidden relative border-0 rounded-none">
    <div className="flex w-[300%] animate-carousel">
        {slides.map(slide => (
      <div key={slide.id} className="transition-transform duration-500 ease-in-out relative text-center p-5 bg-[#fff0f6] border-0 rounded-none box-border" style={{ minWidth: '33.33%' }}>
            <img src={slide.image} alt={slide.name} className="w-full h-[280px] rounded-lg object-cover" />
            <h2 className="text-brandBlue text-2xl font-semibold mt-4">{slide.name}</h2>
            <blockquote className="italic text-brandBlue my-2">{slide.quote}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
