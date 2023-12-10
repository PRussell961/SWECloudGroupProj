

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxFJ4XZuGsytPtviFAOKLYU2787GsE9aA",
  authDomain: "swe-cloud.firebaseapp.com",
  projectId: "swe-cloud",
  storageBucket: "swe-cloud.appspot.com",
  messagingSenderId: "1035528225499",
  appId: "1:1035528225499:web:53a20b973209fa7656c2fe",
  measurementId: "G-HCWTTEQ3X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
