// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBROLaoslLfLmICvEyTu8Nb0aIN3ke-amc",
  authDomain: "blog-f13b1.firebaseapp.com",
  projectId: "blog-f13b1",
  storageBucket: "blog-f13b1.appspot.com",
  messagingSenderId: "52257135574",
  appId: "1:52257135574:web:0645c4d6c115c47c706277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();