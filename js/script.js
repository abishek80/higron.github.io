$(document).ready(function () {
    AOS.init({
        duration: 1500,
    });

    var sections = $('section');
    var menuItems = $('#higron-menu li a');

    $(window).on('scroll', function() {
        var currentSection = "";

        sections.each(function() {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            if ($(window).scrollTop() >= sectionTop - sectionHeight / 3) {
                currentSection = $(this).attr('id');
            }
        });

        menuItems.removeClass('active');
        menuItems.each(function() {
            if ($(this).attr('href').includes(currentSection)) {
                $(this).addClass('active');
            }
        });
    });
    
    $('.client-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 2000,
        navigation: false,
        margin: 25,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            767: {
                items: 4
            },
            1080: {
                items: 5
            },
            1280: {
                items: 6
            }
        }
    });
});