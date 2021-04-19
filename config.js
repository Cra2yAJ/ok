import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
      apiKey: "AIzaSyD_nw-Nnzrz-cg_jhjr0H1fqWKcVDs-KlI",
      authDomain: "notesssssssssss.firebaseapp.com",
      projectId: "notesssssssssss",
      storageBucket: "notesssssssssss.appspot.com",
      messagingSenderId: "554209054861",
      appId: "1:554209054861:web:01924d78ff58259ad212c4"
    };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
