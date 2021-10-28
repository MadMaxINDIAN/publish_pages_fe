// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmDY6v59GIGUXaGJbetgeg2UIb0fmp2ow",
  authDomain: "publish-project-e67c3.firebaseapp.com",
  projectId: "publish-project-e67c3",
  storageBucket: "publish-project-e67c3.appspot.com",
  messagingSenderId: "106385743001",
  appId: "1:106385743001:web:da294c0c5ce9e64b0eac08",
  measurementId: "G-QTJNZ1QRRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};