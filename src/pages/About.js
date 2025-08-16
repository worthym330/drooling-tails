import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f8f8f8;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: left;
`;

const Title = styled.h2`
  color: #2F9ABF;
  font-family: 'Pacifico', cursive;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #2F9ABF;
  font-family: 'Algerian', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const List = styled.ul`
  color: #ff85a2;
  font-family: 'Pacifico', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const VideoSection = styled.div`
  flex: 1;
  padding-left: 20px;
  text-align: center;
`;

const Video = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
`;

const About = () => (
  <AboutContainer>
    <TextSection>
      <Title>About Us</Title>
      <Paragraph>
        Drooling Tails pet bakery was started by our fussy eater Chef Nemo and his clumsy hooman in her 20s. We specialize in creating pretty and droolicious treats for your pooches 🍕🧁. Every ingredient we use is dog-safe and of high-quality human grade. As a HOME BASED bakery, please contact us 2-3 days prior to place an order 💌.
      </Paragraph>
      <Paragraph>
        Our story began with a passion for baking and a love for dogs. What started as a small experiment quickly turned into a thriving business. We pride ourselves on using only the finest ingredients and crafting each treat with love and care.
      </Paragraph>
      <Paragraph>
        At Drooling Tails, we believe in:
      </Paragraph>
      <List>
        <li>Using only the finest and safest ingredients for your pets.</li>
        <li>Creating custom cakes and treats tailored to your dog's preferences and dietary needs.</li>
        <li>Offering a variety of flavors and designs to choose from.</li>
        <li>Providing exceptional customer service and ensuring satisfaction with every order.</li>
        <li>Continuously innovating and improving our recipes to ensure the best for your furry friends.</li>
      </List>
      <Paragraph>
        Our mission is to spread joy and health through our delicious and nutritious treats. Every wag of the tail and happy bark we receive is a testament to our commitment. Thank you for supporting our small business and being a part of the Drooling Tails family!
      </Paragraph>
    </TextSection>
    <VideoSection>
      <Video src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="About Us Video"></Video>
    </VideoSection>
  </AboutContainer>
);

export default About;
