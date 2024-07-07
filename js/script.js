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

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
});