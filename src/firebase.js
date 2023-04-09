import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs0jJKfSzXnom7sI1gceyek_kfbvlyzn8",
  authDomain: "video-f4c3a.firebaseapp.com",
  projectId: "video-f4c3a",
  storageBucket: "video-f4c3a.appspot.com",
  messagingSenderId: "259394331207",
  appId: "1:259394331207:web:be06318f3947d505270762",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;