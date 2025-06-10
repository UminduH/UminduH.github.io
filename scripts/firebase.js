import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9PCCMPpIYWMsjwla_Whb39YNVigWAAiw",
  authDomain: "my-portfolio-umindu.firebaseapp.com",
  projectId: "my-portfolio-umindu",
  storageBucket: "my-portfolio-umindu.firebasestorage.app",
  messagingSenderId: "362525979547",
  appId: "1:362525979547:web:2940aae4ea5ee94706a73e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// console.log(app);
// console.log(db);
