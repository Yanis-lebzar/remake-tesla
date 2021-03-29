// clique sur le burger
let spanBurger = document.querySelector('.hamburger');
let menuBurger = document.querySelector('.burger_menu');
let mask = document.querySelector('#full-size');
// barre du milieu qui disparait + barre du haut et du bas qui rotate  
spanBurger.addEventListener('click', event =>{
    //document.body.style = "overflow : hidden;"
spanBurger.classList.toggle('active');
menuBurger.classList.toggle('activeBurger');
mask.classList.toggle('mask');
})
// div menu sur le coté droit qui arrive
document.body.appendChild(menuBurger);
mask.onclick = () => {
    if(spanBurger.classList.contains('active')){
      //  document.body.style = "overflow : inherit;"

        spanBurger.classList.remove('active');  
   menuBurger.classList.remove('activeBurger');
        mask.classList.remove('mask');
    }

}
       
   

// si on rappuie sur la croix ou sur la page de base, ça s'enleve
// le burger redevient normal