// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-DXBwanakuhg3GRz9Kp_Q9vbINuXpZpw",
  authDomain: "project-5-e525d.firebaseapp.com",
  databaseURL: "https://project-5-e525d-default-rtdb.firebaseio.com",
  projectId: "project-5-e525d",
  storageBucket: "project-5-e525d.firebasestorage.app",
  messagingSenderId: "653052172095",
  appId: "1:653052172095:web:8b3221cd3e8535a125a58a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFirebase=getDatabase(app);
const authFirebase=getAuth(app);
export {dbFirebase,authFirebase};