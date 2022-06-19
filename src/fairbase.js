import { initializeApp } from "firebase/app";

console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FAIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FAIRBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FAIRBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FAIRBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FAIRBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FAIRBASE_APP_ID,
  measurementId: process.env.REACT_APP_FAIRBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
