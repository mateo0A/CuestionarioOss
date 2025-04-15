const logIn=document.querySelector('.frm-Login');

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