import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyClX3Mbz5vFlnHkBjtRfvYujTQ6fcexDAg",
  authDomain: "fir-869fb.firebaseapp.com",
 projectId: "fir-869fb",
  storageBucket: "fir-869fb.appspot.com",
  messagingSenderId: "122533875590",
  appId: "1:122533875590:web:fe6d73b4ad2aad94cce607",
  measurementId: "G-X9GYL44B4N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged };
