import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF6LS7jEjzm9HTzLpzG9_NZhQJ1WQ_E3A",
  authDomain: "regal-moment-265311.firebaseapp.com",
  databaseURL: "https://regal-moment-265311.firebaseio.com",
  projectId: "regal-moment-265311",
  storageBucket: "regal-moment-265311.appspot.com",
  messagingSenderId: "727774404761",
  appId: "1:727774404761:web:ba274fa82e3cb8933a9808"
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();