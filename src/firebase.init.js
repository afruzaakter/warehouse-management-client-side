
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9PS5slvAShNfrTXTzMdHSAjyfTEnirAk",
  authDomain: "assignment-11-brazzers.firebaseapp.com",
  projectId: "assignment-11-brazzers",
  storageBucket: "assignment-11-brazzers.appspot.com",
  messagingSenderId: "352753810951",
  appId: "1:352753810951:web:e4b24d910fc6dea909b4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;