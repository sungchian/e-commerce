// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA14SDYX4w084_ldCU3Frak5joTbTYwB0U",
  authDomain: "jellojam-1.firebaseapp.com",
  projectId: "jellojam-1",
  storageBucket: "jellojam-1.firebasestorage.app",
  messagingSenderId: "969636165867",
  appId: "1:969636165867:web:9f6e009adea311715726ae",
  measurementId: "G-P7ENGVV39S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// 初始化 Firestore，並將 'app' 傳入，這樣 'app' 就被使用了
const db = getFirestore(app);

export { db, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc };