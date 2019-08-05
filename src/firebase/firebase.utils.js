import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyDhriIE3zj2MKVoaSrrZqLSM84eeCy7tUY",
  authDomain: "ecom-clothing.firebaseapp.com",
  databaseURL: "https://ecom-clothing.firebaseio.com",
  projectId: "ecom-clothing",
  storageBucket: "",
  messagingSenderId: "498176584741",
  appId: "1:498176584741:web:62d052a7af4f0ed7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;