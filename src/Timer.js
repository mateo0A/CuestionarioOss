let tiempo = 600; 
const btnResult=document.querySelector('.resultadoCuest')
const modalRes=document.querySelector('.resultadosImpr')


const reactiv=document.querySelector('.anhoter')

reactiv.addEventListener('click',()=>{
     tiempo = 600; 

})
let display = document.querySelector('.timer');
setInterval(() => {
    const minutos = Math.floor(tiempo / 60); 
    const segundos = tiempo % 60; 

    display.innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    tiempo--;

    if (tiempo < 0) {
        clearInterval();
        display.innerText = "0:00";
        modalRes.classList.add('activarModal')
        document.querySelector('.cuestionarioFrm').classList.add('res')

    }
}, 1000);