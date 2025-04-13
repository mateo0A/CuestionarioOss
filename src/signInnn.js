import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
 
import {auth } from './firebase.js' 

const loginFrm=document.querySelector('.frm-Login');

loginFrm.addEventListener('submit',async e=>{
    e.preventDefault()

    const emailIn=loginFrm['emailUser'].value;
    const passwordIn=loginFrm['passwordUser'].value;
    console.log(emailIn + passwordIn);
    try {
        const credentials= await signInWithEmailAndPassword(auth,emailIn,passwordIn)
        console.log(credentials);
        
        window.location='html/Cuestionario.html'
        
    } catch (error) {
        console.log(error);
        
    }
    

})