// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
// import { REACT_APP_GOOGLE_PLACES_API_KEY } from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh51b15XlbShMIeETE3iroRxMpaPaUM5M",
  authDomain: "edusharp-de629.firebaseapp.com",
  projectId: "edusharp-de629",
  storageBucket: "edusharp-de629.appspot.com",
  messagingSenderId: "257078871465",
  appId: "1:257078871465:web:b99db41c817dc5f85ff0b8",
  measurementId: "G-N8ZZCGZCG1"
};

// Initialize Firebase
let app;
if(!firebase.apps.length){
     app = firebase.initializeApp(firebaseConfig);
}else{
    firebase.app;
}
const auth=firebase.auth();
const database=app.database();


export {auth,database};