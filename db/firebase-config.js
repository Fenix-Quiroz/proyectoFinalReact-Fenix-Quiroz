import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABPE9ZYIxGpCMqflJqvuLVQQwEOAbvUnA",
  authDomain: "e-commerce-adf1d.firebaseapp.com",
  projectId: "e-commerce-adf1d",
  storageBucket: "e-commerce-adf1d.appspot.com",
  messagingSenderId: "356598271818",
  appId: "1:356598271818:web:c0a625e6c2559d249d7bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;