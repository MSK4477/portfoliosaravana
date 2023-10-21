
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVEN_ZVe62qLhT6zOLt8c_POgWVcdY3mA",
  authDomain: "portfolio-saravana.firebaseapp.com",
  projectId: "portfolio-saravana",
  storageBucket: "portfolio-saravana.appspot.com",
  messagingSenderId: "265313391746",
  appId: "1:265313391746:web:0cfeacc50d46d879d1509b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore() 