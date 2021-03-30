// clique sur le burger
let spanBurger = document.querySelector('.hamburger');
let menuBurger = document.querySelector('.burger_menu');
let mask = document.querySelector('#full-size');
// barre du milieu qui disparait + barre du haut et du bas qui rotate  

function openNav(){
    spanBurger.classList.toggle('active');

    document.getElementById("menuBurger").style.width = "300px";
    document.getElementById("menuBurger").style.padding = "35px 20px 20px 20px";

    mask.classList.toggle('mask');

}
function closeNav(){
    document.getElementById("menuBurger").style.width = "0px";
    document.getElementById("menuBurger").style.padding = "55px 0px 20px 0px";

    spanBurger.classList.remove('active');  
    mask.classList.remove('mask');
}





spanBurger.addEventListener('click', event =>{
    if(spanBurger.classList.contains('active')){
        closeNav()
    }else {
        openNav()

    }
})

// div menu sur le coté droit qui arrive
document.body.appendChild(menuBurger);
mask.onclick = () => {
    if(spanBurger.classList.contains('active')){

       return closeNav();
    }

}

       
   

// si on rappuie sur la croix ou sur la page de base, ça s'enleve
// le burger redevient normal