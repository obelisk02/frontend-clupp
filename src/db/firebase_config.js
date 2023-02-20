
const { initializeApp} = require('firebase/app');
const { getAuth } = require('firebase/auth');


//const firebase = require('firebase');
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsneODbe6acHe21KjlJB9PSwveOrFvve8",
  authDomain: "clupp-tecnica.firebaseapp.com",
  projectId: "clupp-tecnica",
  storageBucket: "clupp-tecnica.appspot.com",
  messagingSenderId: "853861145855",
  appId: "1:853861145855:web:287ed7351d9f3faea1c0ca"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.database
