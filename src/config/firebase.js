
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCcQfocuVe-Ca80oaEQ8ynCo40ZkJijuBM",
  authDomain: "fyp-react-5f97d.firebaseapp.com",
  databaseURL: "https://fyp-react-5f97d-default-rtdb.firebaseio.com",
  projectId: "fyp-react-5f97d",
  storageBucket: "fyp-react-5f97d.appspot.com",
  messagingSenderId: "218889372514",
  appId: "1:218889372514:web:ece9484f8502fd000ae23b"
};

export const app = firebase.initializeApp(firebaseConfig);
export const Firestore = firebase.firestore();
export const Auth = firebase.auth();
export const Storage = firebase.storage();
export const Functions = firebase.functions();

if (window.location.hostname === "localhost") {
  firebase.firestore().useEmulator("localhost", 8081);
  firebase.auth().useEmulator("http://localhost:9099");
  firebase.storage().useEmulator("localhost", 9199);
  firebase.functions().useEmulator("localhost", 5001);
}

