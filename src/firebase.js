// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SPFRIBgIrHLHd_XrZ6soMfEJA4HI50M",
  authDomain: "authentication-5799b.firebaseapp.com",
  projectId: "authentication-5799b",
  storageBucket: "authentication-5799b.appspot.com",
  messagingSenderId: "820830356929",
  appId: "1:820830356929:web:850145bd24c3429ca69b40",
  measurementId: "G-1M18LK6KM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app,analytics,auth}