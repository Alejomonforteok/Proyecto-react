// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9zeEuKHTOLZxQ1kPjtamT1kBDuJ-pRSc",
  authDomain: "ecommerce-react-43ac1.firebaseapp.com",
  projectId: "ecommerce-react-43ac1",
  storageBucket: "ecommerce-react-43ac1.appspot.com",
  messagingSenderId: "565645282237",
  appId: "1:565645282237:web:47eb18b01925abf58ae0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
