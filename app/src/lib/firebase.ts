import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,

  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,

  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,

  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,

  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,

  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
};

// Initialises variables to be exported
const app: FirebaseApp = initializeApp(firebaseConfig);
let firebaseAuth: Auth;

// Reading what mode we are running the program in
const mode = import.meta.env.MODE;

// Uses production firebase services
if (mode === "production") {
  firebaseAuth = getAuth(app);
}

// Uses emulator firebase services
if (mode === "development") {
  firebaseAuth = getAuth();
  connectAuthEmulator(firebaseAuth, "http://localhost:9099");
}

export { app, firebaseAuth };
