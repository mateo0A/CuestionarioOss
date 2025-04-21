const containPreg=document.querySelector('.cuestionarioFrm')
console.log('frrr');

let widthScreen=window.innerWidth;

if(widthScreen<=950){
    containPreg.classList.add('responM')
    console.log('movil');

}  else{
    containPreg.classList.remove('responM')
    console.log('desktop');
    
}   
window.addEventListener('resize',()=>{
    let widthScreen=window.innerWidth;
    if(widthScreen<=950){
        containPreg.classList.add('responM')
    console.log('movil');

    }  else{
        containPreg.classList.remove('responM')
        
        console.log('desktop');
    }     
})