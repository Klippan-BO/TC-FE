// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7HXxGBdu6s52-_597CCRgf3T03Z0ANU",
  authDomain: "trail-companions.firebaseapp.com",
  projectId: "trail-companions",
  storageBucket: "trail-companions.appspot.com",
  messagingSenderId: "1030729749112",
  appId: "1:1030729749112:web:94000a5731f6eba2a2d38d",
  measurementId: "G-XRTRE52M39"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// add scopes here with provider.addScope();

const auth = getAuth(app);


export {
  auth,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};