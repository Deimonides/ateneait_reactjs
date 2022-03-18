// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSGUwVz2-N-W65Ni9R7qY8KGl_lXr1HHM",
  authDomain: "ateneait-solotun.firebaseapp.com",
  projectId: "ateneait-solotun",
  storageBucket: "ateneait-solotun.appspot.com",
  messagingSenderId: "597413156042",
  appId: "1:597413156042:web:320e0db456a13ca3371033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStore = () => { return app }
const db = getFireStore()