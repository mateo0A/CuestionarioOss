let pp=document.querySelectorAll('.rc')

const btnCuest=document.querySelector('.resultadoCuest')

const btnMost=document.querySelector('.mostrarRes')
export let nota=0
const mostrarNota=document.querySelector('.resultadoCu')
btnCuest.addEventListener('click',()=>{

    pp.forEach(element => {
   
        if(element.checked){
            nota++ 
            
        }
    
    
    
    
    });

    console.log(nota);
    mostrarNota.innerText=`Resultado: ${nota}`
    nota=0
})
   