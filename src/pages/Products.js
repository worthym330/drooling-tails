import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 40px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  color: #c49863;
  font-family: 'Pacifico', cursive;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 30px; /* Reduced padding */
  transition: transform 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 80%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  color: #c49863;
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #ff85a2;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
`;

const ProductPrice = styled.p`
  color: #ff85a2;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;


const Products = () => (
  <ProductsContainer>
    <Title>Our Products</Title>
    <ProductsGrid>
      <ProductCard>
        <ProductImage src="/p2.jpeg" alt="Yummy Dog Cake" />
        <ProductTitle>Yummy Dog Cake</ProductTitle>
        <ProductDescription>Delicious and nutritious cake made with love for your furry friend. Available in various flavors!</ProductDescription>
        <ProductPrice>250.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p1.jpeg" alt="Chewy Dog Biscuits" />
        <ProductTitle>Chewy Dog Biscuits</ProductTitle>
        <ProductDescription>Crunchy and tasty biscuits perfect for training and rewarding your dog. Made with wholesome ingredients.</ProductDescription>
        <ProductPrice>300.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p3.jpeg" alt="Doggie Ice Cream" />
        <ProductTitle>Doggie Ice Cream</ProductTitle>
        <ProductDescription>Cool down your pup with our special dog-friendly ice cream. Available in multiple flavors!</ProductDescription>
        <ProductPrice>150.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p4.jpeg" alt="Healthy Dog Treats" />
        <ProductTitle>Healthy Dog Treats</ProductTitle>
        <ProductDescription>Nutrient-packed treats that your dog will love. Great for maintaining a healthy diet.</ProductDescription>
        <ProductPrice>180.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p5.jpeg" alt="Custom Dog Cakes" />
        <ProductTitle>Custom Dog Cakes</ProductTitle>
        <ProductDescription>Order a personalized cake for your dog's special day. Customizable designs and flavors!</ProductDescription>
        <ProductPrice>350.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p6.jpeg" alt="Dog Treat Sampler" />
        <ProductTitle>Dog Treat Sampler</ProductTitle>
        <ProductDescription>Try a variety of our best-selling treats in one sampler pack. Great for picky eaters!</ProductDescription>
        <ProductPrice>300.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p7.jpeg" alt="Birthday Pupcakes" />
        <ProductTitle>Birthday Pupcakes</ProductTitle>
        <ProductDescription>Celebrate your dog's birthday with our specially decorated pupcakes. Fun and tasty!</ProductDescription>
        <ProductPrice>280.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p8.jpeg" alt="Gourmet Dog Chews" />
        <ProductTitle>Gourmet Dog Chews</ProductTitle>
        <ProductDescription>High-quality chews made from premium ingredients. Perfect for keeping your dog entertained.</ProductDescription>
        <ProductPrice>220.00</ProductPrice>
      </ProductCard>
      <ProductCard>
        <ProductImage src="/p14.jpeg" alt="Seasonal Dog Treats" />
        <ProductTitle>Seasonal Dog Treats</ProductTitle>
        <ProductDescription>Special treats available for holidays and seasons. Limited editions and festive flavors!</ProductDescription>
        <ProductPrice>180.00</ProductPrice>
      </ProductCard>
    </ProductsGrid>
  </ProductsContainer>
);

export default Products;
