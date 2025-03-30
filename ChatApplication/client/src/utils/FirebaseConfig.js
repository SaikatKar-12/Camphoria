import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKJ0U4lqMXQz3FpIef5wRNecNBlTyVc3o",
  authDomain: "campus-sync-f752e.firebaseapp.com",
  projectId: "campus-sync-f752e",
  storageBucket: "campus-sync-f752e.firebasestorage.app",
  messagingSenderId: "658875711409",
  appId: "1:658875711409:web:385bb9fcfd582cecf84790",
  measurementId: "G-01Z719QJ0V"
};

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);