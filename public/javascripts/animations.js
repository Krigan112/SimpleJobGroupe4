/* ANIMATION SCROLLING - BUTTON COMMENCER 
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

/* SCROLL BUTTON CONTINUER - INDEX */ 
$('a[href=#ancre-suite]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html,body').stop().animate({
        'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            });
});

/* SCROLL BUTTON SUIVANT - INSCRIPTION DEMANDEUR */ 
$('a[href=#ancre-test-demandeur]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('.content-formulaire').stop().animate({
        'scroll': $target.offset().top
        }, 100, function () {
            window.location.hash = target;
            });
});

/* SCROLL BUTTON RETOUR - INSCRIPTION DEMANDEUR */ 
$('a[href=#ancre-info-demandeur]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('.content-formulaire').stop().animate({
        'scrollTop': $target.offset().top
        }, 100, function () {
            window.location.hash = target;
            });
});

/* SCROLL BUTTON SUIVANT - INSCRIPTION RECRUTEUR */ 
$('a[href=#ancre-test-recruteur]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('.content-formulaire').stop().animate({
        'scrollTop': $target.offset().top
        }, 100, function () {
            window.location.hash = target;
            });
});

/* SCROLL BUTTON RETOUR - INSCRIPTION RECRUTEUR */ 
$('a[href=#ancre-info-recruteur]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('.content-formulaire').stop().animate({
        'scrollTop': $target.offset().top
        }, 100, function () {
            window.location.hash = target;
            });
});







