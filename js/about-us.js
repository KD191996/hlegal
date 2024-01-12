
$('.achievements-wrap').owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        680: {
            items: 4,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})

