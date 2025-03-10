// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfd1gJzZEKkuKylKBbeyxJJfQrfrMDWxw",
  authDomain: "netflixgpt-870bb.firebaseapp.com",
  projectId: "netflixgpt-870bb",
  storageBucket: "netflixgpt-870bb.firebasestorage.app",
  messagingSenderId: "100916718148",
  appId: "1:100916718148:web:0fd7fffd019a4b09bc6a11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
