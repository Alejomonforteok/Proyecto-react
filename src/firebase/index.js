// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxARtmU1IE1TyKBz3MgpSoj5gbMwfVSmI",
    authDomain: "ecommerce-react-14f0e.firebaseapp.com",
    projectId: "ecommerce-react-14f0e",
    storageBucket: "ecommerce-react-14f0e.appspot.com", 
    messagingSenderId: "531582588477",
    appId: "1:531582588477:web:96d67d0771a788026efc54"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
