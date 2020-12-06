import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9O-_fsxlousRBWYNphHPnmuRCZbb3E60",
  authDomain: "happyshoppywebby.firebaseapp.com",
  databaseURL: "https://happyshoppywebby.firebaseio.com",
  projectId: "happyshoppywebby",
  storageBucket: "happyshoppywebby.appspot.com",
  messagingSenderId: "844219112853",
  appId: "1:844219112853:web:0bfad15c449ad7f4806a9c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth;

export { db, auth };
