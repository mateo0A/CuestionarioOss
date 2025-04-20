let pp=document.querySelectorAll('.rc')

let btn=document.querySelector('.resultadoCuest')


btn.addEventListener('click',()=>{
    let nota=0

    pp.forEach(element => {
   
        if(element.checked){
            nota++
            
        }
    
    
    
    
    });
    console.log(nota);
    
})
