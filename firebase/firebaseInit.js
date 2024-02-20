// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAarm9iIB8uDO0-lezMz35vGFDNZ-xTYb8",
    authDomain: "exposhopapp-ae767.firebaseapp.com",
    projectId: "exposhopapp-ae767",
    storageBucket: "exposhopapp-ae767.appspot.com",
    messagingSenderId: "1068351935054",
    appId: "1:1068351935054:web:9a81a13d8c3d178546691f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);