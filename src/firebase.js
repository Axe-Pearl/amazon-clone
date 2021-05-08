import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR_EIvgCnHhsT6boMwjRSxI4CZJm-XEhI",
    authDomain: "challange-a03d4.firebaseapp.com",
    projectId: "challange-a03d4",
    storageBucket: "challange-a03d4.appspot.com",
    messagingSenderId: "698303244252",
    appId: "1:698303244252:web:e7a725b1f459eb1d1b5119",
    measurementId: "G-PC4YT0BXVN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };