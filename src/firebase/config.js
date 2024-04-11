// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxW2NR9ZQ5R6isMPn4EE07smzatenkFU",
  authDomain: "tiendadetodo-bd122.firebaseapp.com",
  projectId: "tiendadetodo-bd122",
  storageBucket: "tiendadetodo-bd122.appspot.com",
  messagingSenderId: "446104129548",
  appId: "1:446104129548:web:9afb9a5ca44d5125e11e29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)