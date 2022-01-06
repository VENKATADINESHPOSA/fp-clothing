import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAjzMHKjXZAQybwU6vhSXgad0vqYc-62kA",
  authDomain: "fp-clothing-db.firebaseapp.com",
  projectId: "fp-clothing-db",
  storageBucket: "fp-clothing-db.appspot.com",
  messagingSenderId: "884960614358",
  appId: "1:884960614358:web:1c7d6ff86a90a805f23677",
  measurementId: "G-1YCJ1ZQPE5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
