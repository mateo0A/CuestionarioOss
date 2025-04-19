
let containPreg1=document.querySelector('.pregTem1');
let containPreg2=document.querySelector('.pregTem2');
let containPreg3=document.querySelector('.pregTem3');
let containPreg4=document.querySelector('.pregTem4');
let containPreg5=document.querySelector('.pregTem5');








const btnSigu=document.querySelector('.siguiente')

const btnAnterior=document.querySelector('.anterior')

let NPContainer=containPreg5
let containFocus=containPreg1

btnSigu.addEventListener('click',()=>{
    if(containFocus.nextElementSibling.className==="limiteFooter"){
        NPContainer=containFocus

        containFocus=containPreg1
    }else{
        NPContainer=containFocus
        containFocus=containFocus.nextElementSibling
    }
    
    let topAn=window.getComputedStyle(containFocus).top
    containFocus.style.top=`${window.getComputedStyle(NPContainer).top}`
    NPContainer.style.top=`${topAn}`
    console.log(topAn);
    
    
    
    
    
})

btnAnterior.addEventListener('click',()=>{
    
    if(containFocus.previousElementSibling.className==="limiteInicio"){
        NPContainer=containFocus

        containFocus=containPreg5
    }else{
        NPContainer=containFocus
        containFocus=containFocus.previousElementSibling
        
    }

    let indexNP=window.getComputedStyle(NPContainer).zIndex
    containFocus.style.zIndex=`${indexNP}` 
    NPContainer.style.zIndex=`${(window.getComputedStyle(NPContainer).zIndex)-1}`

    console.log(indexNP);

    console.log(NPContainer)
    console.log(containFocus);
    ;
    
    
    
})