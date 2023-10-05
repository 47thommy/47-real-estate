// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "real-estate-ef3a8.firebaseapp.com",
  projectId: "real-estate-ef3a8",
  storageBucket: "real-estate-ef3a8.appspot.com",
  messagingSenderId: "671964603107",
  appId: "1:671964603107:web:69c985c2bb691404af1bd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
