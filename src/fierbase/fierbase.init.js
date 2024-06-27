// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwqOTU1R7LITXNk-jW_nPch5GaItW2v6s",
  authDomain: "selfpratice-19dbe.firebaseapp.com",
  projectId: "selfpratice-19dbe",
  storageBucket: "selfpratice-19dbe.appspot.com",
  messagingSenderId: "372537376770",
  appId: "1:372537376770:web:59f7949d075515017a671b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  default auth;