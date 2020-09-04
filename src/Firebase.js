import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD1-iNBvb3cBxDEguuS_6U8P7fPEjChxyA",
    authDomain: "hugo-winners.firebaseapp.com",
    databaseURL: "https://hugo-winners.firebaseio.com",
    projectId: "hugo-winners",
    storageBucket: "hugo-winners.appspot.com",
    messagingSenderId: "214416997516",
    appId: "1:214416997516:web:e25b392e53d1ce67ab8fa9"
  };
  // Initialize Firebase

        firebase.initializeApp(firebaseConfig);


  export default firebase;