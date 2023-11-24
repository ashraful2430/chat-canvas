import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUldJACwsnny_jhCDKPAbcZqqWQyhOFpU",
  authDomain: "chat-canvas-725c3.firebaseapp.com",
  projectId: "chat-canvas-725c3",
  storageBucket: "chat-canvas-725c3.appspot.com",
  messagingSenderId: "267142720379",
  appId: "1:267142720379:web:a2137d5417d3860205ebde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
