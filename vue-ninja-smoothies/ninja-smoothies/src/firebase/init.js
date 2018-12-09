import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBC_jOKZflPMjug8OYgk_aLT5RGcCmdl48",
    authDomain: "vue-ninja-smoothies-30b3f.firebaseapp.com",
    databaseURL: "https://vue-ninja-smoothies-30b3f.firebaseio.com",
    projectId: "vue-ninja-smoothies-30b3f",
    storageBucket: "vue-ninja-smoothies-30b3f.appspot.com",
    messagingSenderId: "420849789817"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({timestampsInSnapshots: true})

 //export firestore database
 export default firebaseApp.firestore()