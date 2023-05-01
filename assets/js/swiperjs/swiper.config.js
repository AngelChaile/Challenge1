const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    speed: 900,
    allowTouchMove: false,
    
    // Autoplay options
    // Uncomment for production
    autoplay: {
        delay: 5000,
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });