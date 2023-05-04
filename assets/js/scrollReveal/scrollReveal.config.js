// OPTIONS
// Declared set of options for every element

// Default options
ScrollReveal({ 
   desktop: true,
   mobile: false,
});

// Main Carrousel
const swiperMainSlideOptions = [
   {
      container: '#swiper-main__container-1',
      easing: 'ease-in-out',
      origin: 'top',
      distance: '50px',
   },
   {
      container: '#swiper-main__container-2',
      easing: 'ease-in-out',
      origin: 'top',
      distance: '50px',
   },
   {
      container: '#swiper-main__container-3',
      easing: 'ease-in-out',
      origin: 'top',
      distance: '50px',
   }
];

// Features
const featuresTitleOptions = {
    easing: 'ease-in-out',
    origin: 'top',
    distance: '50px',
    viewFactor: 0.5,
    viewOffset: {
      bottom: 100,
    } 
};
const featuresBoxOptions = {
    easing: 'ease-in-out',
    origin: 'top',
    distance: '50px',
    interval: 200,
    viewFactor: 0.5,
};

// Promotion
const promotionInfoOptions = {
   easing: 'ease',
   origin: 'left',
   distance: '100px',
   interval: 200,
   viewFactor: 0.8,
};

// Brand Carrousel
const swiperBrandTitleOptions = {
   easing: 'ease-in-out',
   origin: 'top',
   distance: '50px',
   viewFactor: 0.5,
   viewOffset: {
     bottom: 100,
   } 
};

const swiperBrandOptions = {
   easing: 'ease-in-out',
   origin: 'top',
   distance: '10px',
   interval: 200,
   viewFactor: 1.0,
   viewOffset: {
      bottom: 100
   }
};


// ENABLE SCROLL REVEAL
// Comment to disable all animations for an element
 ScrollReveal().reveal('#swiper-main__slide-1', swiperMainSlideOptions[0]);

 ScrollReveal().reveal('#swiper-main__slide-2', swiperMainSlideOptions[1]);

 ScrollReveal().reveal('#swiper-main__slide-3', swiperMainSlideOptions[2]);

 ScrollReveal().reveal('#features__title', featuresTitleOptions);

 ScrollReveal().reveal('#features__box', featuresBoxOptions); 

 ScrollReveal().reveal('#promotion__info', promotionInfoOptions);

 ScrollReveal().reveal('#swiper-brand__title', swiperBrandTitleOptions);

 ScrollReveal().reveal('#swiper-brand__image', swiperBrandOptions);
