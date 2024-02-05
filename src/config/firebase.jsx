// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR4JQMb5BIvak6KwMkY5uAWoReegFqp8o",
    authDomain: "chat-app-a95ca.firebaseapp.com",
    projectId: "chat-app-a95ca",
    storageBucket: "chat-app-a95ca.appspot.com",
    messagingSenderId: "517327428838",
    appId: "1:517327428838:web:502aeb4c85fb5fae526f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();