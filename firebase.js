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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");