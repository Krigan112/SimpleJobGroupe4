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

/* #########################################
######################################### */

/* PAGE INSCRIPTION DEMANDEUR - DEFILEMENT DES BLOCKS - ETAPES INSCRIPTION */ 

/* CLICK BUTTON SUIVANT */ 

$('#click-suivant-demandeur').click(function() {
    $(".block-info-perso").toggleClass("block-info-click");
    $(".block-test-competences").toggleClass("block-test-click");
});

/* CLICK BUTTON RETOUR */ 

$('#click-retour-demandeur').click(function() {
    $(".block-test-competences").toggleClass("block-test-retour");
    $(".block-info-perso").toggleClass("block-info-retour");
});

/* PAGE INSCRIPTION RECRUTEUR - DEFILEMENT DES BLOCKS - ETAPES INSCRIPTION */ 

/* CLICK BUTTON SUIVANT */ 

$('#click-suivant-recruteur').click(function() {
    $(".block-inscription-recruteur").toggleClass("block-info-recruteur-suivant");
    $(".block-test-inscription-recruteur").toggleClass("block-test-recruteur-suivant");
});

/* CLICK BUTTON RETOUR */ 

$('#click-retour-recruteur').click(function() {
    $(".block-test-inscription-recruteur").toggleClass("block-test-recruteur-retour");
    $(".block-inscription-recruteur").toggleClass("block-info-recruteur-retour");
});











