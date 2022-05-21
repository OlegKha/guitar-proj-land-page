'use strict'

const swiperCustomers = document.querySelector('.swiper-customers');

if (swiperCustomers) {
    const swiper = new Swiper('.swiper-customers', {
        // Optional parameters
        autoheight: true,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}