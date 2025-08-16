import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBXkRGJpLEfnahQRxOBaMIOOCMpqwCyRj4",
  authDomain: "droolingtails-3dfa5.firebaseapp.com",
  projectId: "droolingtails-3dfa5",
  storageBucket: "droolingtails-3dfa5.appspot.com",
  messagingSenderId: "465250346984",
  appId: "1:465250346984:web:9c34aa607b5f22a480265d",
  measurementId: "G-FQ1M8PYHF3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
`;

const MapSection = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Address = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #f8f8f8;
  font-size: 16px;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ContactContent = styled.div`
  display: flex;
  height: 40%;
  padding: 20px;
  background-color: #fff;
`;

const ContactInfo = styled.div`
  flex: 1;
  padding-right: 20px;
  text-align: left;
`;

const ContactTitle = styled.h2`
  color: #2F9ABF;
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #2F9ABF;
`;

const ContactFormSection = styled.div`
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ff85a2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff6f8b;
  }
`;

const Timings = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
`;

const SuccessMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #28a745;
  margin-bottom: 20px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <ContactContainer>
      <MapSection>
        <Map
          src="https://www.google.com/maps/embed/v1/place?q=dahanukarvadi+kandivali+west&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          title="Map Location"
          allowFullScreen
        />
      </MapSection>
      <Address>
        Datta Mandir rd, Kandivali West, Mumbai
      </Address>
      <ContactContent>
        <ContactInfo>
          <ContactTitle>Contact With Us</ContactTitle>
          <Info>
            <Icon icon={faPhone} />
            +91 75064 59277
          </Info>
          <Info>
            <Icon icon={faEnvelope} />
            contact@droolingtails.com
          </Info>
          <Timings>
            <strong>We are available:</strong><br />
            Mon-Fri: 11:00am to 9:00pm<br />
            Sat-Sun: 11:00am to 9:00pm
          </Timings>
        </ContactInfo>
        <ContactFormSection>
          {isSubmitted && (
            <SuccessMessage>Your message has been received, you shall be contacted shortly!</SuccessMessage>
          )}
          <ContactForm onSubmit={handleSubmit}>
            <FormField
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <FormField
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <FormField
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <FormField
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </ContactFormSection>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
