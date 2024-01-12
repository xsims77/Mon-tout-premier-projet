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






function activeCarrousel() {


    let imageEnCours = document.getElementById('blocImage1').getAttribute('data-image');
    console.log(imageEnCours);

    if (imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('blocImage1').setAttribute('data-image', 'image2');
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('blocImage1').setAttribute('data-image', 'image3');
    } else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('blocImage1').setAttribute('data-image', 'image4');
    } else {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('blocImage1').setAttribute('data-image', 'image1');

    }

}

var animationCarrousel = setInterval(activeCarrousel, 3000);
