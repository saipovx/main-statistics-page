// Custom scripts
const swiper = new Swiper('.art__swiper1', {

    slidesPerView: 3,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sw_art2',
      prevEl: '.sw_art1',
    },
  });


const swiper2 = new Swiper('.art__footer', {

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sw_foo2',
      prevEl: '.sw_foo1',
    },
  });

  const swiper3 = new Swiper('.swf1', {

    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',

    slidesPerGroup: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hide2',
      prevEl: '.hide1',
    },
  });


  const swiper4 = new Swiper('.swf2', {

    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
  
    // Navigation arrows
    navigation: {
      nextEl: '.hide4',
      prevEl: '.hide3',
    },
  });


  const swiper5 = new Swiper('.swf3', {

    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
    slidesPerGroup: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hide6',
      prevEl: '.hide5',
    },
  });

  const swiper6 = new Swiper('.swf4', {

    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
    slidesPerGroup: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hide8',
      prevEl: '.hide7',
    },
  });


// const box = document.getElementById('box');

// tippy('#button', {
//   content: box.innerHTML,
//   allowHTML: true,
//   trigger: 'click',
//   theme: 'box',
//   animation: 'fade',
// });