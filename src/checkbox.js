export let chekBoxs = 0; // Contador global para los checkboxes seleccionados
export let rc1 = document.querySelectorAll('.rc1'); // Selecciona los checkboxes del grupo 1
export let rc2 = document.querySelectorAll('.rcc2'); // Selecciona los checkboxes del grupo 2

export function checkb() {
    chekBoxs = 0; // Reinicia el contador

    const allChecked = Array.from(rc1).every(checkbox => checkbox.checked);

    if (allChecked) {
        chekBoxs++; // Incrementa el contador si todos están seleccionados
        console.log('Todos los checkboxes de rc1 están seleccionados. Contador:', chekBoxs);
    } else {
        console.log('No todos los checkboxes de rc1 están seleccionados.');
    }

    rc2.forEach(element => {
        if(element.checked){
            chekBoxs=chekBoxs+0.5
        }        
    });
}

