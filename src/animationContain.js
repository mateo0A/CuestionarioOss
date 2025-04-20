let containPreg1 = document.querySelector('.pregTem1');
let containPreg2 = document.querySelector('.pregTem2');
let containPreg3 = document.querySelector('.pregTem3');
let containPreg4 = document.querySelector('.pregTem4');
let containPreg5 = document.querySelector('.pregTem5');


let topContain1 = window.getComputedStyle(containPreg1).top
let topContain2 = window.getComputedStyle(containPreg2).top
let topContain3 = window.getComputedStyle(containPreg3).top
let topContain4 = window.getComputedStyle(containPreg4).top
let topContain5 = window.getComputedStyle(containPreg5).top

const btnSigu = document.querySelector('.siguiente')

const btnAnterior = document.querySelector('.anterior')
let arrayIndex = [5, 4, 3, 2, 1]
let arrayTop = [topContain1, topContain2, topContain3, topContain4, topContain5]
let arrayScale = [1, 0.98, 0.96, 0.94, 0.92]
let arrayOpacity = [1, 0.8, 0.6, 0.4, 0.2]
let NPContainer = containPreg5
let containFocus = containPreg1


containPreg1.style.opacity = arrayOpacity[0]
containPreg2.style.opacity = arrayOpacity[1]
containPreg3.style.opacity = arrayOpacity[2]
containPreg4.style.opacity = arrayOpacity[3]
containPreg5.style.opacity = arrayOpacity[4]











containPreg1.style.filter = "blur(0px)"


btnSigu.addEventListener('click', () => {



    if (containFocus.nextElementSibling.className === "limiteFooter") {
        NPContainer = containFocus

        containFocus = containPreg1
    } else {
        NPContainer = containFocus
        containFocus = containFocus.nextElementSibling
    }

    containFocus.style.filter = "blur(0px)"
    NPContainer.style.filter = "blur(0.01px)"


    const lastOpacity = arrayOpacity.pop()
    arrayOpacity.unshift(lastOpacity)

    containPreg1.style.opacity = arrayOpacity[0]
    containPreg2.style.opacity = arrayOpacity[1]
    containPreg3.style.opacity = arrayOpacity[2]
    containPreg4.style.opacity = arrayOpacity[3]
    containPreg5.style.opacity = arrayOpacity[4]




    NPContainer.style.filtrer = "blur(0px)"



    const lastIndex = arrayIndex.pop()
    arrayIndex.unshift(lastIndex);


    containPreg1.style.zIndex = arrayIndex[0];
    containPreg2.style.zIndex = arrayIndex[1];
    containPreg3.style.zIndex = arrayIndex[2];
    containPreg4.style.zIndex = arrayIndex[3];
    containPreg5.style.zIndex = arrayIndex[4];


    const lastTop = arrayTop.pop()
    arrayTop.unshift(lastTop)

    containPreg1.style.top = arrayTop[0];
    containPreg2.style.top = arrayTop[1];
    containPreg3.style.top = arrayTop[2];
    containPreg4.style.top = arrayTop[3];
    containPreg5.style.top = arrayTop[4];

    const lastscale = arrayScale.pop()
    arrayScale.unshift(lastscale)

    containPreg1.style.scale = arrayScale[0]
    containPreg2.style.scale = arrayScale[1]
    containPreg3.style.scale = arrayScale[2]
    containPreg4.style.scale = arrayScale[3]
    containPreg5.style.scale = arrayScale[4]




})

btnAnterior.addEventListener('click', () => {






    if(containFocus.previousElementSibling.className==="limiteInicio"){
        NPContainer=containFocus

        containFocus=containPreg5
    }else{
        NPContainer=containFocus
        containFocus=containFocus.previousElementSibling
        
    }

    containFocus.style.filter = "blur(0px)"
    NPContainer.style.filter = "blur(1px)"

    const lastOpacity = arrayOpacity.shift()
    arrayOpacity.push(lastOpacity)

    containPreg1.style.opacity = arrayOpacity[0]
    containPreg2.style.opacity = arrayOpacity[1]
    containPreg3.style.opacity = arrayOpacity[2]
    containPreg4.style.opacity = arrayOpacity[3]
    containPreg5.style.opacity = arrayOpacity[4]


    const lastIndex = arrayIndex.shift()
    arrayIndex.push(lastIndex);


    containPreg1.style.zIndex = arrayIndex[0];
    containPreg2.style.zIndex = arrayIndex[1];
    containPreg3.style.zIndex = arrayIndex[2];
    containPreg4.style.zIndex = arrayIndex[3];
    containPreg5.style.zIndex = arrayIndex[4];


    const lastTop = arrayTop.shift()
    arrayTop.push(lastTop)

    containPreg1.style.top = arrayTop[0];
    containPreg2.style.top = arrayTop[1];
    containPreg3.style.top = arrayTop[2];
    containPreg4.style.top = arrayTop[3];
    containPreg5.style.top = arrayTop[4];

    const lastscale = arrayScale.shift()
    arrayScale.push(lastscale)

    containPreg1.style.scale = arrayScale[0]
    containPreg2.style.scale = arrayScale[1]
    containPreg3.style.scale = arrayScale[2]
    containPreg4.style.scale = arrayScale[3]
    containPreg5.style.scale = arrayScale[4]











})

