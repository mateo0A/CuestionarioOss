const btnResult=document.querySelector('.resultadoCuest')
const modalRes=document.querySelector('.resultadosImpr')
const reactiv=document.querySelector('.anhoter')

btnResult.addEventListener('click', () => {
    modalRes.classList.add('activarModal')
    document.querySelector('.cuestionarioFrm').classList.add('res')
});

reactiv.addEventListener('click',()=>{
    modalRes.classList.remove('activarModal')
    document.querySelector('.cuestionarioFrm').classList.remove('res')
})