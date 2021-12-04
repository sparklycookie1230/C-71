import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyDFxZF9DwsX0KR1eYeoAGkdy_O_olGkDv4",
  authDomain: "c-71-389c0.firebaseapp.com",
  projectId: "c-71-389c0",
  storageBucket: "c-71-389c0.appspot.com",
  messagingSenderId: "568723274164",
  appId: "1:568723274164:web:e7faea571c1c9186089ae1"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

