// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoOJlDtZ9h5HvbM_YN7y-7GCyjk0H1Tdg",
  authDomain: "portfolio-f2b90.firebaseapp.com",
  projectId: "portfolio-f2b90",
  storageBucket: "portfolio-f2b90.appspot.com",
  messagingSenderId: "604725675066",
  appId: "1:604725675066:web:1e5b68779e9962ac222103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }