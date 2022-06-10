// import firebase from 'firebase'; // why cant i import using this method?
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyC2ZKoSrtH_oeU6QySMscQszPWbt3qKvSo",
    authDomain: "clone-4a7a7.firebaseapp.com",
    projectId: "clone-4a7a7",
    storageBucket: "clone-4a7a7.appspot.com",
    messagingSenderId: "373482550885",
    appId: "1:373482550885:web:b0120b6a6b47ad7220b88c",
    measurementId: "G-40VCEXQ7JJ"
 
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};
