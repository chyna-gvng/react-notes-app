import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjclGsz29IOhmfBD4jNn2nnElLC5j5ht0",
  authDomain: "react-notes-f2366.firebaseapp.com",
  projectId: "react-notes-f2366",
  storageBucket: "react-notes-f2366.appspot.com",
  messagingSenderId: "999656511692",
  appId: "1:999656511692:web:6880fc67c817cb26004a69"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes");