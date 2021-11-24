import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgBbJiDXC74jnRj7nyKS4hkQh7nbClurk",
    authDomain: "fir-69a7c.firebaseapp.com",
    projectId: "fir-69a7c",
    storageBucket: "fir-69a7c.appspot.com",
    messagingSenderId: "1098658077702",
    appId: "1:1098658077702:web:356425bdc9dcbcffaf7787",
    measurementId: "G-ERN17FMSKG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };