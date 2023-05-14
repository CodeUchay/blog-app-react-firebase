// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmaN40MYIS8HMvMH4vehIKi_MTXdExUM0",
  authDomain: "blogproject-59c62.firebaseapp.com",
  projectId: "blogproject-59c62",
  storageBucket: "blogproject-59c62.appspot.com",
  messagingSenderId: "485732369774",
  appId: "1:485732369774:web:0e0ed6a82ea579d8e7ed7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();