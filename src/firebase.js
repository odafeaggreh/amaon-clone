import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm0k9z1DxlgzmJZYNbrB2HKi01SwDqNaU",
  authDomain: "clone-12628.firebaseapp.com",
  projectId: "clone-12628",
  storageBucket: "clone-12628.appspot.com",
  messagingSenderId: "418254803054",
  appId: "1:418254803054:web:8067b700215136e7b8167f",
  measurementId: "G-GS0YJQDJ6F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
