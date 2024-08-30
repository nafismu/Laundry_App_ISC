// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo5EBVTNGL3EWu7AoSrsNWW8jZba-0A_Y",
  authDomain: "laundryapp-567d1.firebaseapp.com",
  projectId: "laundryapp-567d1",
  storageBucket: "laundryapp-567d1.appspot.com",
  messagingSenderId: "647351830539",
  appId: "1:647351830539:web:f7502adeb28d6f77965f0e",
  measurementId: "G-BBCHYQPG51"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);