import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_PROJECT_ID,
  projectId: process.env.FIREBASE_STORAGE_BUCKET,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  //measurementId: 'G-measurement-id',
};

// Initialize firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get reference to the service
// const auth = getAuth(app);


export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase