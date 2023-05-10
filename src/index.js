const closeMenu = document.querySelector('#close-mobile-menu')
const openMenu = document.querySelector('.header-content .toggle')
const mobileMenu = document.getElementById('mobile-side');
const mobileMenuShadow = document.getElementById('menu-shadow');

closeMenu.addEventListener('click',() =>{
    mobileMenu.style.display = "none"
    mobileMenuShadow.style.display= "none"

})

mobileMenuShadow.addEventListener('click',() =>{
    mobileMenu.style.display = "none"
    mobileMenuShadow.style.display= "none"

})

openMenu.addEventListener('click',() =>{
    mobileMenu.style.display = "block"
    mobileMenuShadow.style.display= "block"
})

// document.querySelector('body').addEventListener('click',() =>{
//     mobileMenu.style.display = "none"
// })
