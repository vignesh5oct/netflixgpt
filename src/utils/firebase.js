// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-cRavFVtpmzCDemaZORM5t3C6ZjYl9n8",
  authDomain: "netflixgpt-55384.firebaseapp.com",
  projectId: "netflixgpt-55384",
  storageBucket: "netflixgpt-55384.appspot.com",
  messagingSenderId: "210704327768",
  appId: "1:210704327768:web:f86cb0c0b957b09e8cd62d",
  measurementId: "G-D7P83NXZ8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);