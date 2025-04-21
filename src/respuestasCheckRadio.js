let resCorrect=document.querySelector('#resCorrect1').value
let resIncorrect=document.querySelector('.reI1').value

let textPreg1=document.querySelector('.txtP1')

const rBt1=document.querySelector('.resC1')
const rBt2=document.querySelector('.reI1')
let ress1=resCorrect.split(" ")
let ress2=resIncorrect.split(" ")

rBt1.addEventListener('click',()=>{
    
    textPreg1.innerText=`4.-La Configuración de ${ress1[0]} se refiere a la forma en que un ${ress1[1]} a un programa se ${ress1[2]} cuando enciendes tu computadora. `
    
})

rBt2.addEventListener('click',()=>{
    textPreg1.innerText=`4.-La Configuración de ${ress2[0]} se refiere a la forma en que un ${ress2[1]} a un programa se ${ress2[2]} cuando enciendes tu computadora.`
})
//-----------------------------


let textPreg2=document.querySelector('.txtP2')

const res1=document.querySelector('.res1').value
const res2=document.querySelector('.res2').value
const res3=document.querySelector('.res3').value

const rBt3=document.querySelector('.res1')
const rBt4=document.querySelector('.res2')
const rBt5=document.querySelector('.res3')

rBt3.addEventListener('click',()=>{
    textPreg2.innerText=`8.-El tipo de archivo de video más extendido en Internet es el ${res1}`
})
rBt4.addEventListener('click',()=>{
    textPreg2.innerText=`8.-El tipo de archivo de video más extendido en Internet es el ${res2}`
})
rBt5.addEventListener('click',()=>{ 
    textPreg2.innerText=`8.-El tipo de archivo de video más extendido en Internet es el ${res3}` 
})



    

//---------------------------------
let textPreg3=document.querySelector('.txtP3');
const btn6=document.querySelector('.res4')

const btn7=document.querySelector('.res5')


const res4=document.querySelector('.res4').value
let ress3=res4.split(" ")
const res5=document.querySelector('.res5').value
let ress4=res5.split(" ")

btn6.addEventListener('click',()=>{
    textPreg3.innerText=` 11.-La estructura de directorios en un ${ress3[0]} operativo es la manera en la que se ${ress3[1]} .Y almacena los ${ress3[2]}. Y carpetas en el ${ress3[3]} de archivos.`
})
btn7.addEventListener('click',()=>{
    textPreg3.innerText=` 11.-La estructura de directorios en un ${ress4[0]} operativo es la manera en la que se ${ress4[1]} .Y almacena los ${ress4[2]}. Y carpetas en el ${ress4[3]} de archivos.`

})
//-------------------------------------
let textPreg4=document.querySelector('.txtP4');
const btn8=document.querySelector('.res6')
const btn9=document.querySelector('.res7')

let res6=document.querySelector('.res6').value
let ress5=res6.split(" ");
let res7=document.querySelector('.res7').value
let ress6=res7.split(" ");

btn8.addEventListener('click',()=>{
    textPreg4.innerText=`16.-En la ${ress5[0]} de Windows, pueden ${ress5[1]}. Tanto comandos ${ress5[2]} como ${ress5[3]}. para realizar diversas ${ress5[4]}.`
})
btn9.addEventListener('click',()=>{
    textPreg4.innerText=`16.-En la ${ress6[0]} de Windows, pueden ${ress6[1]}. Tanto comandos ${ress6[2]} como ${ress6[3]}. para realizar diversas ${ress6[4]}.`
})


//----------------------------------------------
let textPreg5=document.querySelector('.txtP5');
const btn10=document.querySelector('.res8')
const btn11=document.querySelector('.res9')

let res8=document.querySelector('.res8').value
let ress7=res8.split(" ");
let res9=document.querySelector('.res9').value
let ress8=res9.split(" ");
btn10.addEventListener('click',()=>{
    textPreg5.innerText=`18.-Las ${ress7[0]} De configuración del ${ress7[1]} se refiere a los ${res7[2]} que puedes usar para ${res7[3]} y configurar la ${ress7[4]} el comportamiento y otros ${ress7[5]}.del terminal en tu sistema ${ress7[6]} ` 
})
btn11.addEventListener('click',()=>{
    textPreg5.innerText=`18.-Las ${ress8[0]} De configuración del ${ress8[1]} se refiere a los ${res8[2]} que puedes usar para ${res8[3]} y configurar la ${ress8[4]} el comportamiento y otros ${ress8[5]}.del terminal en tu sistema ${ress8[6]} ` 

})

//------------------------------------
let textPreg6=document.querySelector('.txtP6');
const btn12=document.querySelector('.res10')
const btn13=document.querySelector('.res11')
let res10=document.querySelector('.res10').value
let ress9=res10.split(" ");
let res11=document.querySelector('.res11').value
let ress10=res11.split(" ");
btn12.addEventListener('click',()=>{
    textPreg6.innerText=`20.-La ${ress9[0]} de ficheros ${ress9[1]}, parámetros y ${ress9[2]}. así como la ${ress9[3]}.`
})
btn13.addEventListener('click',()=>{
    textPreg6.innerText=`20.-La ${ress10[0]} de ficheros ${ress10[1]}, parámetros y ${ress10[2]}. así como la ${ress10[3]}.`
})