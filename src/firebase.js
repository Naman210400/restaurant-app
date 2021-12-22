import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8oeZ9XjXi0puVFr9Lc8ULUjf8Qzj5POk",
    authDomain: "restaurant-app-23863.firebaseapp.com",
    projectId: "restaurant-app-23863",
    storageBucket: "restaurant-app-23863.appspot.com",
    messagingSenderId: "1083908562621",
    appId: "1:1083908562621:web:bbef26c420cf4eeab3e1d4",
    measurementId: "G-PZW1HWNGJG"
});

var db  = firebaseApp.firestore();

export { db };