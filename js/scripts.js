window.onload = function () {
    function menu() {
        document.querySelector('.body').classList.toggle('menu-opened');
    }

    let arr = document.querySelectorAll('.menu-toggle');
    for (const value of arr) {
        value.addEventListener('click', menu);
    }
};
$('.gallery').slick({
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        },
    ]
});
