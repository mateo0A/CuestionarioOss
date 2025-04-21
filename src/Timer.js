let tiempo = 1200; 
 
let display = document.querySelector('.timer');
setInterval(() => {
    const minutos = Math.floor(tiempo / 60); 
    const segundos = tiempo % 60; 

    display.innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    tiempo--;

    if (tiempo < 0) {
        clearInterval();
        display.innerText = "0:00";
    }
}, 1000);