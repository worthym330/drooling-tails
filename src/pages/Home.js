import React from 'react';
import Carousel from '../components/Carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="text-brandBlue">
      <section className="bg-gradient-to-br from-brandPinkLight/40 via-white to-brandPinkLight/40">
        <div className="container flex flex-col md:flex-row items-center gap-10 py-16">
          <div className="flex-1">
            <h1 className="font-pacifico text-4xl md:text-5xl leading-tight text-brandGold mb-6">Wholesome Handmade Treats For Tail-Wagging Moments</h1>
            <p className="text-brandBlue/80 mb-6 max-w-lg">Fresh, nutritious & irresistibly cute bakes crafted lovingly for your furry best friend. 100% dog-safe ingredients, zero nasties.</p>
            <div className="flex gap-4">
              <a href="/shop" className="bg-brandPink text-white px-6 py-3 rounded shadow hover:shadow-lg transition text-sm font-semibold">Shop Now</a>
              <a href="/about" className="px-6 py-3 rounded border border-brandPink text-brandPink hover:bg-brandPink hover:text-white transition text-sm font-semibold">Our Story</a>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-md">
            <div className="rounded-[3rem] overflow-hidden shadow-card ring-4 ring-white/60">
              <img src="/p5.jpeg" alt="Featured Treat" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-card px-4 py-3 rounded-xl text-xs font-medium">Freshly Baked Daily</div>
            <div className="absolute top-6 -right-6 bg-brandPink text-white shadow-card px-4 py-3 rounded-xl text-xs font-medium">Pooch Approved</div>
          </div>
        </div>
      </section>
      <div className="container py-12">
        <Carousel />
      </div>
      <section className="flex justify-between items-center bg-[#f8f8f8] p-10 rounded-lg mt-5 flex-col md:flex-row">
        <div className="flex-1 text-left md:mr-5">
          <h2 className="font-pacifico text-brandBlue mb-5 text-3xl">About the Bakery</h2>
          <p className="font-roboto text-brandBlue mb-8 text-lg">Drooling Tails Pet Bakery was started by our fussy eater Chef Nemo and his clumsy hooman in her 20s. Here we make pretty and droolicious stuffs for your poochh 🍕🧁.</p>
        </div>
        <div className="flex-1 flex flex-col justify-center w-full">
          {[
            { title: 'Cake Design', width: 'w-[98%]' },
            { title: 'Cake Recipe', width: 'w-[95%]' },
            { title: 'Pet Satisfaction', width: 'w-full' }
          ].map(bar => (
            <div key={bar.title} className="w-full text-left mb-5">
              <h4 className="font-roboto text-brandBlue mb-2">{bar.title}</h4>
              <div className="bg-brandPinkLight rounded-xl overflow-hidden relative h-[30px] mt-2">
                <div className={`bg-brandPink h-full transition-all duration-500 ${bar.width}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
  <section className="bg-[#BEEEFF] p-10 rounded-lg mt-10 text-center">
        <h2 className="font-pacifico text-brandBlue mb-5 text-3xl">Meet the Team</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-5">
          {[
            { img: './nemo.jpeg', name: 'Chef Nemo', role: 'Head Baker' },
            { img: './hooman.jpeg', name: 'Clumsy Hooman(Saurabhi Deokar)', role: 'Assistant Baker' }
          ].map(member => (
            <div key={member.name} className="bg-[#BEEEFF] p-5 rounded-lg w-full md:w-[45%] text-center shadow-md">
              <img src={member.img} alt={member.name} className="rounded-full w-[300px] h-[300px] mx-auto mb-3 object-cover" />
              <h2 className="font-roboto text-brandBlue text-2xl">{member.name}</h2>
              <p className="font-roboto text-brandBlue">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
  <section className="bg-[#fff7f8] p-10 rounded-lg mt-10 text-center">
        <h2 className="font-pacifico text-brandBlue mb-5 text-3xl">Testimonials</h2>
        <Slider {...settings}>
          {[
            { text: '"The cakes from Drooling Tails are a delight! My dog loves them."', author: 'Jane Doe' },
            { text: '"Great variety and quality. My pets can\'t get enough."', author: 'John Smith' },
            { text: '"My dog has never been happier. The treats are amazing!"', author: 'Sarah Johnson' },
            { text: '"Highly recommend for any dog owner. Fantastic quality!"', author: 'Michael Brown' },
            { text: '"The best bakery for pets in town. Exceptional service."', author: 'Linda Davis' },
            { text: '"My dog loves the treats from Drooling Tails. Highly satisfied!"', author: 'Chris Lee' }
          ].map((t, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-[#ffe6f2] p-5 rounded-lg m-2 w-[90%] max-w-[900px] text-left">
                <p className="font-roboto text-brandBlue text-lg">{t.text}</p>
                <div className="flex items-center mt-2">
                  <div className="rounded-full w-[50px] h-[50px] bg-gray-300 mr-2" />
                  <h4 className="font-roboto text-brandBlue">{t.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
  <section className="flex flex-col md:flex-row items-center p-10 rounded-lg mt-10 gap-5">
        <div className="flex-1 max-w-[50%] mr-5 bg-white/80 p-5 rounded-lg relative flex flex-col items-start gap-4">
          <h1 className="text-brandBlue font-normal text-xl m-0">FOLLOW US ON INSTAGRAM</h1>
          <p className="font-[Calbiri] text-brandBlue text-[2.3em] italic m-0 leading-tight">Sweet Moments are best saved memories!</p>
          <div className="flex items-center gap-2">
            <img src="/instagram-logo.png" alt="Instagram Logo" className="w-[30px] h-[30px]" />
            <a href="https://www.instagram.com/droolingtails_petbakery" target="_blank" rel="noopener noreferrer" className="text-brandBlue no-underline font-sans text-[25px] hover:underline">@droolingtails_petbakery</a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2 justify-end">
          {['/p1.jpeg','/p10.jpeg','/p8.jpeg','/p12.jpeg','/p16.jpeg','/p3.jpeg'].map((src,i)=>(
            <img key={src} src={src} alt={`Instagram ${i+1}`} className={`w-full h-auto rounded-lg ${i===1?'':'skew-x-[-5deg]'}`} />
          ))}
        </div>
      </section>
  <section className="p-5 bg-[#f0f8ff] rounded-lg mt-10">
        <h2 className="font-pacifico text-brandBlue mb-5 text-3xl">Our Location</h2>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=dahanukarvadi+kandivali+west&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" allowFullScreen="" loading="lazy" title="map" className="w-full h-[300px] border-0 rounded-lg mt-5" />
      </section>
    </div>
  );
};

export default Home;