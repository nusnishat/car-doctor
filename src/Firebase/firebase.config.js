// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkOgNiMPwK2_ZDCOXDKFGsIrw3ETlNv8",
  authDomain: "car-doctor-2fa1f.firebaseapp.com",
  projectId: "car-doctor-2fa1f",
  storageBucket: "car-doctor-2fa1f.appspot.com",
  messagingSenderId: "494214699005",
  appId: "1:494214699005:web:44e1363408f68300bb2b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;