import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDH1xe-DXpKXFEzV2GK6Klozqe8M7I7EOk",
  authDomain: "prepwise-3da30.firebaseapp.com",
  projectId: "prepwise-3da30",
  storageBucket: "prepwise-3da30.firebasestorage.app",
  messagingSenderId: "434701834712",
  appId: "1:434701834712:web:4ed86e089aa2471b547aad",
  measurementId: "G-K8C1PTWTL6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)