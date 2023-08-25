new Swiper('.image-slider', {
    // стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: -64,
    slidesPerView: 1,
    
    breakpoints: {
        600: {
            spaceBetween: 31,
            slidesPerView:2, // Кількість слайдів при ширині екрану 1300px і більше
        },
        1500: {
            spaceBetween: 31,
            slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
        },

    },
})

new Swiper('.image-slider2', {
    // стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: -66,
    slidesPerView: 1,
    
    breakpoints: {
        600: {
            spaceBetween: 31,
            slidesPerView:2, // Кількість слайдів при ширині екрану 1300px і більше
        },
        1500: {
            spaceBetween: 31,
            slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
        },

    },
})