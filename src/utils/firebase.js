// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD47Bn9GgCxfZZ7LPV38Z6FYWp1baW0Ov4",
  authDomain: "washingtondcpcg.firebaseapp.com",
  projectId: "washingtondcpcg",
  storageBucket: "washingtondcpcg.firebasestorage.app",
  messagingSenderId: "151224591425",
  appId: "1:151224591425:web:6656cee0e3697806b992c0",
  measurementId: "G-CL0EE0EWBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
