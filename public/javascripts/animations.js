/* ANIMATION SCROLLING - BUTTON COMMENCER */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

/* ################################################################# */

/* RESTRICTION ETAPE PAR ETAPE - REMPLISSAGE DES CHAMPS OBLIGATOIRE */ 

/* ... */ 

/* ################################################################# */ 

/* PAGE INSCRIPTION - DEFILEMENT DES ETAPES */ 

/* INSCRIPTION DEMANDEUR */ 

/* ETAPE INFORMATION PERSONNELLES - CLICK DEFILEMENT ETAPE 2 */ 

$('#click-suivant-demandeur').click(function() {
    $(".content-formulaire").toggleClass("demandeur-suivant");
});

/* ETAPE TEST COMPETENCES - CLICK DEFILEMENT RETOUR ETAPE 1 */ 

$('#click-retour-demandeur').click(function() {
    $(".content-formulaire").toggleClass("retour");
});

/* INSCRIPTION RECRUTEUR */ 

/* ETAPE INFORMATION PERSONNELLES - CLICK DEFILEMENT ETAPE 2 */ 

$('#click-suivant-recruteur').click(function() {
    $(".content-formulaire").toggleClass("recruteur-suivant");
});

/* ETAPE TEST COMPETENCES - CLICK DEFILEMENT RETOUR ETAPE 1 */ 

$('#click-retour-recruteur').click(function() {
    $(".content-formulaire").toggleClass("retour");
});














