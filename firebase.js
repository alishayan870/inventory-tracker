// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD285liFegl6NtP_vsZL3EismYSY46QXbM",
  authDomain: "hspantry-6f89e.firebaseapp.com",
  projectId: "hspantry-6f89e",
  storageBucket: "hspantry-6f89e.appspot.com",
  messagingSenderId: "557637561213",
  appId: "1:557637561213:web:c1a07ad62bb08d9ef9ba14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };