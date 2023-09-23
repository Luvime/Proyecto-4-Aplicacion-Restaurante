// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGBe2FfEyPVcyrrRilI3pqfqqzXBK4nw4",
    authDomain: "fb-crud-react-c9124.firebaseapp.com",
    projectId: "fb-crud-react-c9124",
    storageBucket: "fb-crud-react-c9124.appspot.com",
    messagingSenderId: "773540377994",
    appId: "1:773540377994:web:d46eb4cc1899107697c473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);