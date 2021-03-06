import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCO8sU0nh54VbbUgvUq38Z8GzVgkIvdyQk",
    authDomain: "tutorial-4a36d.firebaseapp.com",
    projectId: "tutorial-4a36d",
    storageBucket: "tutorial-4a36d.appspot.com",
    messagingSenderId: "508426157570",
    appId: "1:508426157570:web:17983065433c69c930f11b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  export default db;