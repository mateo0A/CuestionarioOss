import './src/firebase.js'  


import './src/signInnn.js'

import './src/darkMode.js'

import './src/styleSignIn.js'

import './src/Responsive.js'

let widths=document.querySelector('.widthSpan')
let heights=document.querySelector('.heigthSpan')

let windowWidth=window.innerWidth
let windowHeight=window.innerHeight
  
widths.innerText=`${windowWidth}`
heights.innerText=`${windowHeight}`

window.addEventListener('resize',()=>{ 
    let windowWidth=window.innerWidth
    let windowHeight=window.innerHeight


    widths.innerText=`${windowWidth}`
    heights.innerText=`${windowHeight}`
})