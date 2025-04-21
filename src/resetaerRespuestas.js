const finalizarBtn = document.querySelector('.resultadoCuest'); // Selecciona el botón "Finalizar Cuestionario"
const radioButtons = document.querySelectorAll('input[type="radio"]'); // Selecciona todos los inputs de tipo radio
const checkedButtons=document.querySelectorAll('input[type="checkbox"]')
finalizarBtn.addEventListener('click', () => {
    radioButtons.forEach(radio => {
        radio.checked = false; 
    });
    checkedButtons.forEach(checkbox => {
        checkbox.checked = false; 
    });

    console.log('Respuestas reseteadas');
});