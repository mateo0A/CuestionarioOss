let widths=document.querySelector('.widthSpan')
let heights=document.querySelectorAll('.conatinPreg')

console.log(heights);


let maxHeight = 0; // Variable para almacenar la mayor altura

heights.forEach(element => {
    const height = element.getBoundingClientRect().height; // Obtiene la altura del contenedor
    if (height > maxHeight) {
        maxHeight = height; // Actualiza maxHeight si la altura actual es mayor
    }
    console.log(1);
    
});

console.log(maxHeight);


let windowWidth=window.innerWidth
let windowHeight=window.innerHeight
