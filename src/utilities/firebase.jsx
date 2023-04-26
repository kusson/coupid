
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "coupid-bbce9.firebaseapp.com",
    projectId: "coupid-bbce9",
    storageBucket: "coupid-bbce9.appspot.com",
    messagingSenderId: "192608898798",
    appId: APP_ID,
    measurementId: "G-D7TWQN5C6Z"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);