import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkT08YsGWxfHGWpcsMHZ-ZdAuDaea26t0",
  authDomain: "foody-bcff1.firebaseapp.com",
  databaseURL: "https://foody-bcff1.firebaseio.com",
  projectId: "foody-bcff1",
  storageBucket: "foody-bcff1.appspot.com",
  messagingSenderId: "261674382996",
  appId: "1:261674382996:web:7cc00b241fb890cea9a681",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
