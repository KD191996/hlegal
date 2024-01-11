// $('.achievements-wrap').owlCarousel({
//     loop: true,
//     margin: 40,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         500: {
//             items: 2
//         },
//         1000: {
//             items: 4
//         }
//     }
// })

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

// responsive: {
//     // breakpoint from 0 up
//     0 : {
//         option1: value,
//             option2 : value,
//         ...
//     },
//     // breakpoint from 480 up
//     480 : {
//         option1: value,
//             option2 : value,
//         ...
//     },
//     // breakpoint from 768 up
//     768 : {
//         option1: value,
//             option2 : value,
//         ...
//     }
// }