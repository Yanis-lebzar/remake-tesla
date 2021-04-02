// clique sur le burger
let spanBurger = document.querySelector('.hamburger');
let menuBurger = document.querySelector('.burger_menu');

let menuBurgerM1 = document.querySelector('.burger_menuM1');
let menuBurgerM2 = document.querySelector('.burger_menuM2');
let plusButton = document.querySelector('.plusButton');
let plusButtonRetour = document.querySelector('.plusButtonRetour');
let mask = document.querySelector('#full-size');
const mediaQueryNav = window.matchMedia('(max-width: 1100px)');
// barre du milieu qui disparait + barre du haut et du bas qui rotate  

// function web and mobile side bar come
function openNav() {
    spanBurger.classList.toggle('active');
    mask.style.height = "100%";

    if (mediaQueryNav.matches) {
        document.getElementById("menuBurgerM1").style.width = "300px";
        document.getElementById("menuBurgerM1").style.padding = "35px 20px 20px 20px";
    } else {
        document.getElementById("menuBurger").style.width = "300px";
        document.getElementById("menuBurger").style.padding = "35px 20px 20px 20px";
    }



}

// plus button

plusButton.addEventListener('click', event =>{
    menuBurgerM2.style.display = 'block';
})
plusButtonRetour.addEventListener('click', event =>{
    menuBurgerM2.style.display = 'none';
})

// function web and mobile side bar close

function closeNav() {
    if (mediaQueryNav.matches) {

        document.getElementById("menuBurgerM1").style.width = "0px";
        document.getElementById("menuBurgerM1").style.padding = "55px 0px 20px 0px";
    } else {
        document.getElementById("menuBurger").style.width = "0px";
        document.getElementById("menuBurger").style.padding = "55px 0px 20px 0px";
    }

    spanBurger.classList.remove('active');
    mask.style.height = "0%";
    menuBurgerM2.style.display = 'none';


}







spanBurger.addEventListener('click', event => {
    if (spanBurger.classList.contains('active')) {
        closeNav()
    } else {
        openNav()

    }
})

// div menu sur le coté droit qui arrive
document.body.appendChild(menuBurger);
mask.onclick = () => {
    if (spanBurger.classList.contains('active')) {

        return closeNav();
    }

}

// animations //




// si on rappuie sur la croix ou sur la page de base, ça s'enleve
// le burger redevient normal