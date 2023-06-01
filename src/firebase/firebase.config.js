// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgPLRGZw7lydVsHRh_R3K98eubjnmGuXA",
  authDomain: "chef-recipe-hunter-clien-d1971.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-d1971",
  storageBucket: "chef-recipe-hunter-clien-d1971.appspot.com",
  messagingSenderId: "487998089621",
  appId: "1:487998089621:web:263efbd37c233f2ac92e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;