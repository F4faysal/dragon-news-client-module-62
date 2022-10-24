// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDTO4dS-yxHa9DWyZQGYmm_NDjWTs9lT0",
  authDomain: "dragon-news-client-6fc6d.firebaseapp.com",
  projectId: "dragon-news-client-6fc6d",
  storageBucket: "dragon-news-client-6fc6d.appspot.com",
  messagingSenderId: "689228984062",
  appId: "1:689228984062:web:403f2dd0f66c9f87ca7faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;