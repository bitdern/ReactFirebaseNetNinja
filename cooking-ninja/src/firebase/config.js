import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTJCrBvdcvL4kEP9MWRxqo44PnUN2zv8Q",
  authDomain: "cooking-ninja-site-cebba.firebaseapp.com",
  projectId: "cooking-ninja-site-cebba",
  storageBucket: "cooking-ninja-site-cebba.appspot.com",
  messagingSenderId: "716855139755",
  appId: "1:716855139755:web:7e9cd8d48d0922c3e2c6ee",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
