import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBsDbTeumLI4daWHBcH6gfAFFy-QzqctaQ",
    authDomain: "n17-proect.firebaseapp.com",
    projectId: "n17-proect",
    storageBucket: "n17-proect.firebasestorage.app",
    messagingSenderId: "846256928448",
    appId: "1:846256928448:web:f902cc1a35a10ba6e19f25",
    measurementId: "G-VVVY3LZTX5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
export { signInWithGoogle };
