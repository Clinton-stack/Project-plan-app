import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB_hGv-80OuynSV6jAOXF3sLpXkFYAZBPg",
    authDomain: "projectplanner-7afc2.firebaseapp.com",
    databaseURL: "https://projectplanner-7afc2.firebaseio.com",
    projectId: "projectplanner-7afc2",
    storageBucket: "projectplanner-7afc2.appspot.com",
    messagingSenderId: "253796365018",
    appId: "1:253796365018:web:0d7f415c99602db117ebe3",
    measurementId: "G-NB35Y2MK24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
//firebase.analytics(); 

export default firebase;