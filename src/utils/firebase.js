// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNhNJcDk6PACnWTI0WuGO_nd1aN8suWu8",
  authDomain: "netflix-demo-clone-16055.firebaseapp.com",
  projectId: "netflix-demo-clone-16055",
  storageBucket: "netflix-demo-clone-16055.appspot.com",
  messagingSenderId: "638909085954",
  appId: "1:638909085954:web:d344d9082405f86bebea1b",
  measurementId: "G-Y0LW0YEWHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
