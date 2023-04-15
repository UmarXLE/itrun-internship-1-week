const btnOpenMenu = document.querySelector(".header__burger");
const menu = document.querySelector(".menu")
const body = document.querySelector('body')
const closeMenu = document.querySelector('.menu__close')

const swiper = new Swiper(".swiper",{
    slidesPreview:1,
    navigation:{
        nextEL:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
})  

closeMenu.addEventListener("click",()=>{
    menu.classList.remove("active-menu")
    btnOpenMenu.classList.remove("active")
})
btnOpenMenu.addEventListener("click",()=> {
    btnOpenMenu.classList.toggle("active")
    menu.classList.toggle("active-menu")

    // body.style.background = 'red'
    console.log(menu)
    console.log(btnOpenMenu)
    console.log('click')
})