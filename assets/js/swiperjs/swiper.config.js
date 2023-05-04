const swiperMain = new Swiper('.swiper', {
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

/*   const swiperBrand = new Swiper('.swiper-brand', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    speed: 900,
    allowTouchMove: true,
    
    // Autoplay options
    // Uncomment for production
    /* autoplay: {
        delay: 5000,
      }, 
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
  });

 */