import {  checkb,chekBoxs } from "./checkbox.js"

let pp=document.querySelectorAll('.rc')

export const btnCuest=document.querySelector('.resultadoCuest')

const btnMost=document.querySelector('.mostrarRes')
export let nota=0
const mostrarNota=document.querySelector('.resultadoCu')
btnCuest.addEventListener('click',()=>{

    pp.forEach(element => {
   
        if(element.checked){
            nota++ 
            
        }
    
    
    
    
    });
    checkb();
    
    nota=nota+chekBoxs 

    mostrarNota.innerText=`Resultado: ${nota}`
    nota=0
})
   
