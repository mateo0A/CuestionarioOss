const logIn=document.querySelector('.frm-Login');
const containPreg=document.querySelector('.seconContain')

let widthScreen=window.innerWidth;

if(widthScreen<=750){
    logIn.classList.add('movil')
}  else{
    logIn.classList.remove('movil')
    
}   
window.addEventListener('resize',()=>{
    let widthScreen=window.innerWidth;
    if(widthScreen<=750){
        logIn.classList.add('movil')
    }  else{
        logIn.classList.remove('movil')
        
    }     
})