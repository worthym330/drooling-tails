import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBXkRGJpLEfnahQRxOBaMIOOCMpqwCyRj4',
  authDomain: 'droolingtails-3dfa5.firebaseapp.com',
  projectId: 'droolingtails-3dfa5',
  storageBucket: 'droolingtails-3dfa5.appspot.com',
  messagingSenderId: '465250346984',
  appId: '1:465250346984:web:9c34aa607b5f22a480265d',
  measurementId: 'G-FQ1M8PYHF3'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Icon = (props) => <FontAwesomeIcon className="mr-2 text-brandBlue" {...props} />;

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
    <div className="flex flex-col h-screen m-0">
      <div className="h-[60%] w-full relative">
        <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed/v1/place?q=dahanukarvadi+kandivali+west&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" title="Map Location" allowFullScreen />
      </div>
      <div className="text-center p-2 bg-[#f8f8f8] text-base text-[#333] font-sans">Datta Mandir rd, Kandivali West, Mumbai</div>
      <div className="flex flex-col md:flex-row h-[40%] p-5 bg-white gap-5 overflow-auto">
        <div className="flex-1 pr-5 text-left">
          <h2 className="text-brandBlue font-pacifico text-2xl mb-5">Contact With Us</h2>
          <p className="text-lg text-[#333] mb-2 flex items-center"><Icon icon={faPhone} /> +91 75064 59277</p>
          <p className="text-lg text-[#333] mb-2 flex items-center"><Icon icon={faEnvelope} /> contact@droolingtails.com</p>
          <div className="mt-5 text-[#333] text-base">
            <strong>We are available:</strong><br />
            Mon-Fri: 11:00am to 9:00pm<br />
            Sat-Sun: 11:00am to 9:00pm
          </div>
        </div>
        <div className="flex-1 pl-5 flex flex-col justify-center">
          {isSubmitted && (
            <div className="text-center text-lg text-green-600 mb-5">Your message has been received, you shall be contacted shortly!</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {['name','email','phone','message'].map(field => (
              <input key={field} type={field==='email'? 'email': field==='phone'? 'number':'text'} name={field} placeholder={field.charAt(0).toUpperCase()+field.slice(1).replace('phone','Phone Number')} value={formData[field]} onChange={handleInputChange} required className="p-2 rounded border border-gray-300 text-base w-full" />
            ))}
            <button type="submit" className="px-5 py-2 bg-brandPink text-white rounded hover:bg-[#ff6f8b] text-base">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
