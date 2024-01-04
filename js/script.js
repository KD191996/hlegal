$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav-wrap').toggleClass('active');
    $('.item-3').toggleClass('active');

})
$('.nav-wrap').click(function (event) {
    console.log(event.target);
    console.log(this);

    if (event.target === this) {
        $('.nav-wrap').removeClass('active')
    }

})
$('.close').click(function () {
    $('.nav-wrap').removeClass('active')
})

var solutionButton = document.querySelectorAll('.solution__box-subject-link');
var solutionText = document.querySelectorAll('.solution__box-info');

solutionButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        solutionText.forEach((text, j) => {
            if (i === j) {
                solutionButton[j].classList.add('solution__box-subject-link--active')
                solutionText[j].classList.add('solution__box-info--visible')
            } else {
                solutionButton[j].classList.remove('solution__box-subject-link--active')
                solutionText[j].classList.remove('solution__box-info--visible')
            }
        })
    })
})

var consistent = document.querySelector('.consistent');
var consistent_text = document.querySelector('.consistent-text');
var customer = document.querySelector('.customer');
var customer_text = document.querySelector('.customer-text');
var innovative = document.querySelector('.innovative');
var innovative_text = document.querySelector('.innovative-text');
var business = document.querySelector('.business');
var business_text = document.querySelector('.business-text');

consistent.addEventListener('click', () => {
    consistent_text.classList.add('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.remove('visible');
    consistent.classList.add('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

customer.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.add('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.remove('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.add('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

innovative.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.add('visible');
    business_text.classList.remove('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.add('solution__box-subject-link--active');
    business.classList.remove('solution__box-subject-link--active');
});

business.addEventListener('click', () => {
    consistent_text.classList.remove('visible');
    customer_text.classList.remove('visible');
    innovative_text.classList.remove('visible');
    business_text.classList.add('visible');
    consistent.classList.remove('solution__box-subject-link--active');
    customer.classList.remove('solution__box-subject-link--active');
    innovative.classList.remove('solution__box-subject-link--active');
    business.classList.add('solution__box-subject-link--active');
});



// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         }
//     }
// })

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})