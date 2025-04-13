 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
 import {getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyAMiSvHWyl1wXW5MProg98kqTkv90wKOy0",
     authDomain: "autentisegundo.firebaseapp.com",
     projectId: "autentisegundo",
     storageBucket: "autentisegundo.firebasestorage.app",
     messagingSenderId: "558784814540",
     appId: "1:558784814540:web:af8eff1572c74ad37d1169"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


 console.log("app run");
 