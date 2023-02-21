import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvXKC2j1JhoRHZUWM02qbedSQOC62p5WA",
  authDomain: "mymoney-eb972.firebaseapp.com",
  projectId: "mymoney-eb972",
  storageBucket: "mymoney-eb972.appspot.com",
  messagingSenderId: "244712849023",
  appId: "1:244712849023:web:7ca708d44a28503027494a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
