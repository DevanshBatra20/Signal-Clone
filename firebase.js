import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, orderBy, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKSiHhkldYORYrU8RfwvWaY618Xu53-T4",
  authDomain: "signal-clone-4c422.firebaseapp.com",
  projectId: "signal-clone-4c422",
  storageBucket: "signal-clone-4c422.appspot.com",
  messagingSenderId: "714105132291",
  appId: "1:714105132291:web:6a72147f0fb0a8f3f50536",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  orderBy,
  query,
};
