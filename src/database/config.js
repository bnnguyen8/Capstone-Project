// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDkvMqLhC1L6YkNnD50rj5FH-ZPBGxfB4",
  authDomain: "bnnguyen-e6c30.firebaseapp.com",
  projectId: "bnnguyen-e6c30",
  storageBucket: "bnnguyen-e6c30.appspot.com",
  messagingSenderId: "909595081529",
  appId: "1:909595081529:web:f4dbd0e130b33fcbfb86e8",
  measurementId: "G-PSV660F2VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);