document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.image-container img');
    var swiperContainer = document.querySelector('.swiper-container');
    var closeBtn = document.querySelector('.swiper-close-btn');

    var swiper = new Swiper(swiperContainer, {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            swiper.slideTo(index, 300, false);
            document.body.classList.add('swiper-modal-open');
        });
    });

    closeBtn.addEventListener('click', function () {
        document.body.classList.remove('swiper-modal-open');
    });
});
