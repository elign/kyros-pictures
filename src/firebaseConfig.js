// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKTAB9HZxhHPkRFO_kaucFYNvzIgc6C9M",
  authDomain: "kyroswebsite.firebaseapp.com",
  projectId: "kyroswebsite",
  storageBucket: "kyroswebsite.appspot.com",
  messagingSenderId: "219038843221",
  appId: "1:219038843221:web:bb32cf28ae27233fd46fdc",
  measurementId: "G-RYP0TGNFJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, storage };
