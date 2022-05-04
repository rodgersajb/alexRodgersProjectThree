// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKWNM0DaNxx-gRI6qPjC42UF1A05pRQPA",
  authDomain: "the-better-share-board.firebaseapp.com",
  projectId: "the-better-share-board",
  storageBucket: "the-better-share-board.appspot.com",
  messagingSenderId: "799072261866",
  appId: "1:799072261866:web:c15370ece141375ef96993",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;