// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-9fb86.firebaseapp.com",
  projectId: "real-estate-9fb86",
  storageBucket: "real-estate-9fb86.appspot.com",
  messagingSenderId: "394756091204",
  appId: "1:394756091204:web:0f065af6f2f118cadcbb11",
  measurementId: "G-4DXTFYTDZG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
