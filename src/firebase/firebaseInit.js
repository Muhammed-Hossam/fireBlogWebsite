// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBay4EfeJSVfuNXDU-VAhEyxPb9Rw4NfEg",
  authDomain: "fireblog-8ad1f.firebaseapp.com",
  projectId: "fireblog-8ad1f",
  storageBucket: "fireblog-8ad1f.appspot.com",
  messagingSenderId: "130078217252",
  appId: "1:130078217252:web:c83f5fafb2da02e7e4f4b1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const timestamp = firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp;