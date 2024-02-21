// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAle2Ub6eBB4fyXXrbcdTQgmnhNHUimO70",
  authDomain: "netflixgpt-2aba6.firebaseapp.com",
  projectId: "netflixgpt-2aba6",
  storageBucket: "netflixgpt-2aba6.appspot.com",
  messagingSenderId: "691549184748",
  appId: "1:691549184748:web:294e7b2d4d14ca9967fbc9",
  measurementId: "G-B2RY3ZVTMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
