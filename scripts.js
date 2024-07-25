document.addEventListener('DOMContentLoaded', function () {
    const productSwiper = new Swiper('.product-carousel', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

    const bannerSwiper = new Swiper('.banner-carousel', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
