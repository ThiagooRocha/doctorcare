
window.addEventListener('scroll' , onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    backToHomeButton()
    activeMenuCurrent(home)
    activeMenuCurrent(services)
    activeMenuCurrent(about)
    activeMenuCurrent(contact)
}

function activeMenuCurrent(section){

    //traça uma linha na imaginaria no meio da tela com base no srolly e a altura dividido por 2
    const targetLine = scrollY + innerHeight / 2 
    //pega o topo da seção com o metodo .offsetTop
    const sectionTop = section.offsetTop
    //pega a altura total da seção com o metodo .offsetHeight
    const sectionHeight = section.offsetHeight

    //verifica se o topo da seção chegou ou passou da linha imaginaria 
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 

    //pega o topo da seção e soma com a altura da seção, verificando onde a seção termina
    const sectionEndsAt = sectionTop + sectionHeight
    //verifica se o final da seção passou da linha imaginaria
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //verifica se o topo da seção e o final da seção chegou na linha imaginaria
    const sectionLimits = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    //pega o atributo id da seção atraves do metodo .getAttribute
    const sectionId = section.getAttribute('id')
    //pega o a dentro de .menu que tenha o href do id da seção
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    //remove todo class 'active' do menuElement
    menuElement.classList.remove('active')

    //se os limites da seção forem verdadeiro ele adiciona a class 'active' no menuElement
    if(sectionLimits){
        menuElement.classList.add('active')
    }
}










function showNavOnScroll(){
    if(scrollY > 0){
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
}
function backToHomeButton(){
    if(scrollY >= 536){
        document.querySelector(".backToHome-button").classList.add('back-page')
    }else{
        document.querySelector(".backToHome-button").classList.remove('back-page')
    }
    
}

function menuExpanded(){
    document.body.classList.add('menu-expanded')
}
function menuClose(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:   '700',
}).reveal('#home ,#home img, #home .div-stats ,#services , #about header, #about .container, #contact header, #contact .container');