import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyACf8PQiSRprT2_HnDsaYcAH09ruXClqPE",
    authDomain: "vue-realtime-chat-fca81.firebaseapp.com",
    databaseURL: "https://vue-realtime-chat-fca81.firebaseio.com",
    projectId: "vue-realtime-chat-fca81",
    storageBucket: "vue-realtime-chat-fca81.appspot.com",
    messagingSenderId: "312271698855"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  
  export default firebaseApp.firestore()