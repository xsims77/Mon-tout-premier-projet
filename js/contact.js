"use strict"
let put = document.getElementById('navList');
let navAffichage = document.getElementsByClassName('disp');
let cache = document.getElementById('navAffiche');
console.log(navAffichage);

function affiche() {
    // console.log('bonjour');
    if (navAffichage != "block") {

        navAffichage[0].style.display = "block";
        navAffichage[1].style.display = "block";
        navAffichage[2].style.display = "block";
        navAffichage[3].style.display = "block";
    }
    setTimeout(function () {
        navAffichage[0].style.display = "";
        navAffichage[1].style.display = "";
        navAffichage[2].style.display = "";
        navAffichage[3].style.display = "";
    }, 3000);
}

put.addEventListener('mouseover', affiche);