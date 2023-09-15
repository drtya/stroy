$(document).ready(function () {
    var homeSlider = $('#home-slider');
    homeSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
    });
    // Go to the next item
    $('.home__next').click(function () {
        homeSlider.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.home__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        homeSlider.trigger('prev.owl.carousel', [300]);
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

    var feedbackSlider = $('#feedback-slider');
    feedbackSlider.owlCarousel({
        items: 3,
        dots: false,
        margin: 16
    });
    // Go to the next item
    $('.feedback__next').click(function () {
        feedbackSlider.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.feedback__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        feedbackSlider.trigger('prev.owl.carousel', [300]);
    });
    //Инструкция выведения всплывающего окна для входа
    $('#open-login-popup').click(function (eve) {
        eve.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.login-popup').fadeIn(1000)
    });
    //Инструкция закрытия окон
    $('.popup-close-btn').click(function () {
        $('.overlay').fadeOut(1000)
        $('.login-popup').fadeOut(1000)
        $('.reg-popup').fadeOut(1000)
        $('.city-popup').fadeOut(1000)

    });
    //Инструкция выведения всплывающего окна для регистрации
    $('.login-popup__reg').click(function () {
        $('.reg-popup').fadeIn(1000)
        $('.login-popup').fadeOut(1000)
    })
    //Инструкция выведения всплывающего окна для выбора города
    $('#open-city-popup').click(function (eve) {
        eve.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.city-popup').fadeIn(1000)
        $('.login-popup').fadeOut(1000)
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.to-top-btn').fadeIn()
        } else {
            $('.to-top-btn').fadeOut()
        }
    })
});


// const addToCartBtn = document.querySelectorAll('.bestsellers__box-general-btn');
// const counter = document.querySelectorAll('.counter');
// const minusBtn = document.querySelectorAll('.counter__minus');
// const plusBtn = document.querySelectorAll('.counter__plus');
// const counterValue = document.querySelectorAll('.counter__value');

// let count = 0;

// addToCartBtn.forEach((btn, index) => {
//     btn.addEventListener('click', function (event) {
//         event.preventDefault();
//         addToCartBtn[index].style.display = 'none';
//         counter[index].style.display = 'flex';
//     });

//     minusBtn[index].addEventListener('click', function () {
//         if (count > 0) {
//             count--;
//             counterValue[index].textContent = count;
//         }
//     });

//     plusBtn[index].addEventListener('click', function () {
//         count++;
//         counterValue[index].textContent = count;
//     });
// })

const addToCartBtn = document.querySelectorAll('.bestsellers__box-general-btn');
const counter = document.querySelectorAll('.counter');
const minusBtn = document.querySelectorAll('.counter__minus');
const plusBtn = document.querySelectorAll('.counter__plus');
const counterInput = document.querySelectorAll('.counter__input');

let count = 0;

addToCartBtn.forEach((btn, index) => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        addToCartBtn[index].style.display = 'none';
        counter[index].style.display = 'flex';
    });

    minusBtn[index].addEventListener('click', function () {
        if (count > 0) {
            count--;
            counterInput[index].value = count;
        }
    });

    plusBtn[index].addEventListener('click', function () {
        count++;
        counterInput[index].value = count;
    });
    counterInput[index].addEventListener('input', function () {
        let count = parseInt(counterInput[index].value);
        if (isNaN(count) || count < 0) {
            counterInput[index].value = 0;
        }
    });

    


})

