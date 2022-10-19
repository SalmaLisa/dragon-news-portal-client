// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd4qy9EMp7gIQA4LnBUD8IxK9tz85Wzfc",
  authDomain: "dragon-news-portal-auth.firebaseapp.com",
  projectId: "dragon-news-portal-auth",
  storageBucket: "dragon-news-portal-auth.appspot.com",
  messagingSenderId: "789562974736",
  appId: "1:789562974736:web:a4e12bfc4f77a0971da095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;