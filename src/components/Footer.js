import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'; // Adjust the import path if needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FooterContainer = styled.footer`
  background: url('/footer-bg.jpeg') no-repeat center center;
  background-size: cover;
  padding: 0px;
  text-align: center;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  border-top: 1px solid #ffff;
`;

const Section = styled.div`
  flex: 1;
  padding: 20px 30px;
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: #333;
    height: 100%;
  }
`;

const Title = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-weight: normal;
  font-family: 'Algerian', serif;
`;

const Text = styled.p`
  color: #333;
  margin: 5px 0;
`;

const LogoImage = styled.img`
  max-width: 80px;
  margin-bottom: 10px;
`;

const SubscribeTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-weight: normal;
  font-family: 'Algerian', serif;
`;

const SubscribeText = styled.p`
  color: #333;
  margin-bottom: 10px;
`;

const SubscribeForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const EmailInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 250px;
  font-size: 16px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #ff85a2;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff6f8b;
  }
`;

const FooterLinks = styled.div`
  margin-top: 20px;
  color: #333;
  a {
    color: #333;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomBar = styled.div`
  background-color: #ffabcc;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  border-top: 0px solid #333;
  position: relative;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

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
    <FooterContainer>
      <FooterContent>
        <Section>
          <Title>WORKING HOURS</Title>
          <Text>Monday - Friday: 11:00 am - 09:00 pm</Text>
          <Text>Saturday: 11:00 am - 09:00 pm</Text>
          <Text>Sunday: 11:00 am - 09:00 pm</Text>
        </Section>
        <Section>
          <LogoImage src="./footerlogo.png" alt="Drooling Tails Pet Bakery Logo" />
          <Text>The Best Part, It is Pooch Approved!!</Text>
        </Section>
        <Section>
          <SubscribeTitle>SUBSCRIBE</SubscribeTitle>
          <SubscribeText>Get latest updates and offers.</SubscribeText>
          <SubscribeForm onSubmit={handleSubscribe}>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SendButton type="submit">Send</SendButton>
          </SubscribeForm>
          {message && <Text>{message}</Text>}
        </Section>
      </FooterContent>
      <BottomBar>
        <Text>&copy; 2024 Drooling Tails Pet Bakery. All rights reserved.</Text>
        <FooterLinks>
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms & Conditions</a> | 
          <a href="https://maps.app.goo.gl/rFjZfPZSe8xGwAoa8">Site Map</a>
        </FooterLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
