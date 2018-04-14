/* PRELOADER */

$(document).ready(function () {
    $('.se-pre-con').fadeOut('slow');
});

/* END PRELOADER */

/* NAVBAR CHANGE ON SCROLL */

$(document).ready(function ($) {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop(),
            navbar = $('.navbar-default');

        if (scrollPos > 20) {
            navbar.addClass('change-color');
        } else {
            navbar.removeClass('change-color');
        }
    });
});

/* END NAVBAR CHANGE ON SCROLL */

/* CAROUSEL BUTTON SCROLL */

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/* END CAROUSEL BUTTON SCROLL */

/* COPYRIGHT YEAR */

$('#date').html(new Date().getFullYear());

/* END COPYRIGHT YEAR */
