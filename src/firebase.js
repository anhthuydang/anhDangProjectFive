import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBTCK4vDsDPy7QORKwccUNTSlKuEsTsC_o",
    authDomain: "desserts-corner.firebaseapp.com",
    databaseURL: "https://desserts-corner.firebaseio.com",
    projectId: "desserts-corner",
    storageBucket: "desserts-corner.appspot.com",
    messagingSenderId: "596476269546",
    appId: "1:596476269546:web:0298aec07519180a239893"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;