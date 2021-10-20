import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC0zam7dwEhAmJr_Y74cTNJJyER0D0wAM0",
    authDomain: "whatsapp-2-e173f.firebaseapp.com",
    projectId: "whatsapp-2-e173f",
    storageBucket: "whatsapp-2-e173f.appspot.com",
    messagingSenderId: "948768389517",
    appId: "1:948768389517:web:d921203516332c676de5c4"
  };

  const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };