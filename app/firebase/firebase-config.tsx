import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB9bhGS81PVNnnu5P3689RbXYjbxT928HM",
  authDomain: "nextjs-ecommerce-f74c5.firebaseapp.com",
  projectId: "nextjs-ecommerce-f74c5",
  storageBucket: "nextjs-ecommerce-f74c5.appspot.com",
  messagingSenderId: "1073000851410",
  appId: "1:1073000851410:web:31b2fff7ef6608e09e0a0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
