import React from 'react';
import styled from 'styled-components';

// Container for the carousel
const CarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden; /* Hides overflowing content */
  position: relative;
  border: 0px solid #ffabcc; /* Border color and width */
  border-radius: 0px; /* Optional: adds rounded corners */
`;

// Wrapper for carousel items
const CarouselWrapper = styled.div`
  display: flex; /* Arrange items in a row */
  width: 300%; /* Full width to accommodate all items */
  animation: slide 10s infinite; /* Infinite sliding animation */
`;

// Individual carousel item
const Slide = styled.div`
  min-width: 33.33%; /* Each slide takes one-third width of the container */
  transition: transform 0.5s ease; /* Smooth transition for sliding effect */
  position: relative;
  text-align: center;
  padding: 20px;
  background-color: #fff0f6;
  border: 0px solid #ffd6e7;
  border-radius: 0px;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
`;

// Image styling
const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 10px;
`;

// Text styling for product name
const ProductName = styled.h2`
  color: #2F9ABF;
`;

// Text styling for quotes
const Quote = styled.blockquote`
  font-style: italic;
  color: #2F9ABF;
  margin: 10px 0;
`;

// Keyframes for sliding animation
const slideAnimation = `
  @keyframes slide {
    0% {
      transform: translateX(0); /* Start from the first slide */
    }
    33.33% {
      transform: translateX(0); /* Stay on the first slide */
    }
    66.66% {
      transform: translateX(-33.33%); /* Move to the second slide */
    }
    100% {
      transform: translateX(-66.66%); /* Move to the third slide */
    }
  }
`;

// Add keyframes globally
const GlobalStyle = styled.div`
  ${slideAnimation}
`;

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
    <>
      <GlobalStyle />
      <CarouselContainer>
        <CarouselWrapper>
          {slides.map(slide => (
            <Slide key={slide.id}>
              <ProductImage src={slide.image} alt={slide.name} />
              <ProductName>{slide.name}</ProductName>
              <Quote>{slide.quote}</Quote>
            </Slide>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
