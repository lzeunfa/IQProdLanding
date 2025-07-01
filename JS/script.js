//swiper de serviços
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
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

        720:{
            slidesPerView: 2
        },

        928:{
            slidesPerView: 3
        },

        1024:{
            slidesPerView: 4
        },
    }
});

new Swiper('.card-wrapper-tops', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
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