import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAVqiVOEnOcbZJR-tLddCr0S8k39BCsoFY",
    authDomain: "linkedin-clone-bd511.firebaseapp.com",
    projectId: "linkedin-clone-bd511",
    storageBucket: "linkedin-clone-bd511.appspot.com",
    messagingSenderId: "885173090357",
    appId: "1:885173090357:web:5ae48e9bdf721d21a5997c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export { db, auth, firestore };
