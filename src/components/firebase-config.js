// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ausj7yK7TsNNKPL8uaSxr8wztdltldE",
  authDomain: "fire-chat-58c1d.firebaseapp.com",
  projectId: "fire-chat-58c1d",
  storageBucket: "fire-chat-58c1d.appspot.com",
  messagingSenderId: "129745627533",
  appId: "1:129745627533:web:f046273255a3c16259b5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {Auth, Provider, db};