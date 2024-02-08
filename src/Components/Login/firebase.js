import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB7WWauIvbl4C8H6pYyhARZIG2QmcwT61c",
  authDomain: "ecommerce-app-7b7f6.firebaseapp.com",
  databaseURL: "https://ecommerce-app-7b7f6-default-rtdb.firebaseio.com",
  projectId: "ecommerce-app-7b7f6",
  storageBucket: "ecommerce-app-7b7f6.appspot.com",
  messagingSenderId: "570373537378",
  appId: "1:570373537378:web:629ec28a1cd4555c6d9b3b",
  measurementId: "G-ZXNFP9QTX0",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
