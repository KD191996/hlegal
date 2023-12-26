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