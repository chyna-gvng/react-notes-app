import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_uXh8KfNe11S8qhfQuB_RAzIHrKFTOHE",
  authDomain: "react-notes-7a013.firebaseapp.com",
  projectId: "react-notes-7a013",
  storageBucket: "react-notes-7a013.appspot.com",
  messagingSenderId: "370854322953",
  appId: "1:370854322953:web:3e20fb09a3b7f61fc329d8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCjclGsz29IOhmfBD4jNn2nnElLC5j5ht0",
//   authDomain: "react-notes-f2366.firebaseapp.com",
//   projectId: "react-notes-f2366",
//   storageBucket: "react-notes-f2366.appspot.com",
//   messagingSenderId: "999656511692",
//   appId: "1:999656511692:web:6880fc67c817cb26004a69"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);