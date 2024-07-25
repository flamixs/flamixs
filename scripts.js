let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-container .carousel-slide');
    const totalSlides = slides.length;
    
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

let currentBanner = 0;

function moveBanner() {
    const banners = document.querySelectorAll('.banner-carousel img');
    const totalBanners = banners.length;
    
    currentBanner = (currentBanner + 1) % totalBanners;
    
    const offset = -currentBanner * 100;
    banners.forEach(banner => {
        banner.style.transform = `translateX(${offset}%)`;
    });
}

setInterval(moveBanner, 3000);
