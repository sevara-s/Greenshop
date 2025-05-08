import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-z_k4tPwV-ZTYms1A8xoV0WgZSzvWMYA",
  authDomain: "green-shop-83daa.firebaseapp.com",
  projectId: "green-shop-83daa",
  storageBucket: "green-shop-83daa.firebasestorage.app",
  messagingSenderId: "922473295838",
  appId: "1:922473295838:web:abaaf97120516cbb9bf74f",
  measurementId: "G-MX7Z1QXD1T",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};


export { signInWithGoogle };
