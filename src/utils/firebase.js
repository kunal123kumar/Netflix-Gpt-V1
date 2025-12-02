// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { EqualApproximatelyIcon } from "lucide-react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZH8Toy58tfVqwOnp-KdiezJ3wwl7RTHc",
  authDomain: "netflix-gpt-cc51a.firebaseapp.com",
  projectId: "netflix-gpt-cc51a",
  storageBucket: "netflix-gpt-cc51a.firebasestorage.app",
  messagingSenderId: "1059533417404",
  appId: "1:1059533417404:web:e8972b204820649f07d9b9",
  measurementId: "G-Y69K4WC32G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export default auth;