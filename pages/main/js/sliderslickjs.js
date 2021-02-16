$(document).ready(function(){
   $('.swiper-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
   });
 });
 //  setting-name: setting-value
 // рандом
//  function setRandomSlide() {
//   var randomSlideId = Math.random() * 9 | 0
//   $('.swiper-wrapper').slick('slickGoTo', randomSlideId.toString())
// }

// arr.sort((a,b)=>Math.random()*2-1)


// let array = [1, 2, 3, 4, 5, 6]
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// shuffleArray(array)


// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(shuffle(array));