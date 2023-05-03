$(document).ready(function () {
    var home = $('#home_slider');
    home.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: false,

    });
    // Go to the next item
    $('.home__next').click(function () {
        home.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.home__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        home.trigger('prev.owl.carousel', [300]);
    });

    var brandsTop = $('#brands_top');
    brandsTop.owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        dots: false,
        slideTransition: 'linear',
        autoplaySpeed: 2500,
        smartSpeed: 2500,
        margin: 16,
    });
    jQuery('#brands_top').trigger('play.owl.autoplay', [1000]);


    var brandsBottom = $('#brands_bottom');
    brandsBottom.owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        dots: false,
        slideTransition: 'linear',
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        margin: 16,

    });

    jQuery('#brands_bottom').trigger('play.owl.autoplay', [1000]);
    function setSpeedT() {
        jQuery('#brands_top').trigger('play.owl.autoplay', [2500]);
    };
    setTimeout(setSpeedT, 1000);

    function setSpeedB() {
        jQuery('#brands_bottom').trigger('play.owl.autoplay', [2000]);
    };
    setTimeout(setSpeedB, 1000);

    var feedback = $('#feedback_slider');
    feedback.owlCarousel({
        items: 3.6,
        dots: false,
        margin: 16,
    

    });
    // Go to the next item
    $('.feedback__next').click(function () {
        feedback.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.feedback__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        feedback.trigger('prev.owl.carousel', [300]);
    });

    $('#popup-reg').click(function(e){
        e.preventDefault();
        $('.reg-popup').css("display", "flex").fadeIn(1000);
        $('.login-popup').fadeOut(1000);
    })
    $('#popup_log-in').click(function(e){
        e.preventDefault();
        $('.overlay').fadeIn(1000);
        $('.login-popup').css("display", "flex").fadeIn(1000);
    })
    $('.popup-close-btn').click(function(e){
        e.preventDefault();
        $('.overlay').fadeOut(1000);
        $('.login-popup').fadeOut(1000);
        $('.reg-popup').fadeOut(1000);
        $('.city-popup').fadeOut(1000);
    })
    $('#popup-city').click(function(e){
        e.preventDefault();
        $('.overlay').fadeIn(1000);
        $('.city-popup').css("display", "flex").fadeIn(1000);
    })
});

