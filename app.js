// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVQl1pMjlkx5k8xnEE-RGxglWZyhLdQw",
  authDomain: "fir-authentication-f1ccb.firebaseapp.com",
  projectId: "fir-authentication-f1ccb",
  storageBucket: "fir-authentication-f1ccb.firebasestorage.app",
  messagingSenderId: "256001176909",
  appId: "1:256001176909:web:b1669fdc83a2f60a077304",
  measurementId: "G-T2NQ16P7C0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const auth = getAuth();

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
  event.preventDefault();
  
const email = document.getElementById('emails').value;
const password = document.getElementById('pasword').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("account created successfully!");
    window.location.href = "/home.html"
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})


