$('.owl-carousel-brand').owlCarousel({
    startPosition: 0,
    loop: true,
    margin: 20,

    nav: false,
    dots: false,
    touchDrag: true,
    mouseDrag: true,

    lazyLoad: true,

    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3600,
    autoplayHoverPause: true,

    responsive: {
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})