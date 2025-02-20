// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2PFGT7VSKIDHNxQ_UGWgh2ijKvX3J2zU",
  authDomain: "portfolio-8390a.firebaseapp.com",
  projectId: "portfolio-8390a",
  storageBucket: "portfolio-8390a.firebasestorage.app",
  messagingSenderId: "967888294180",
  appId: "1:967888294180:web:9c538a471c5ef1363b63b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);

export { db, collection, addDoc };