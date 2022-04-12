// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3_flQSMMQKYPE-mXrpxSvHt1xRomFWW0",
  authDomain: "genius-car-servise.firebaseapp.com",
  projectId: "genius-car-servise",
  storageBucket: "genius-car-servise.appspot.com",
  messagingSenderId: "183566379914",
  appId: "1:183566379914:web:44707d2d8dc8b4db2c7673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;