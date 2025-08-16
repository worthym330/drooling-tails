// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

export { db };
