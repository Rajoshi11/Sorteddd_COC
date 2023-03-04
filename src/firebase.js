import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3vT4SJAowt1Cp9s1N2JUoSvEDtL687JM",
  authDomain: "sortedddcoc.firebaseapp.com",
  projectId: "sortedddcoc",
  storageBucket: "sortedddcoc.appspot.com",
  messagingSenderId: "121879717612",
  appId: "1:121879717612:web:a53f76132de3993eb7a7c9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

