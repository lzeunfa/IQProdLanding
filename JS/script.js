//swiper de serviços
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //responsividade
    breakpoints: {
        0:{
            slidesPerView: 1
        },

        568:{
            slidesPerView: 2
        },

        1024:{
            slidesPerView: 3
        },
    }
});


//swiper de clientes
new Swiper('.card-wrapper-clientes', {
    loop: true,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },

    //responsividade
    breakpoints: {
        0:{
            slidesPerView: 1
        },

        500:{
            slidesPerView: 2
        },

        728:{
            slidesPerView: 3
        },

        1024:{
            slidesPerView: 4
        },
    }
});