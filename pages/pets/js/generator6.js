let array6 = [0, 1, 2, 3, 4, 5, 6, 7],
    result6 = [];
  function shuffleArray(array6) {
  for (let i = array6.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array6[i], array6[j]] = [array6[j], array6[i]];
  }
  return array6;
}
for(let i=0;i<6;i++){
  result6 = [...result6, ...shuffleArray(array6)]
}
// console.log(result6, result6.length)
const sort863 = (list) => { 
  let len = list.length;
  for(let i = 0; i < (len / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6)

    for (let j = 0; j < 6; j++) {
      const dublicatedItem = stepList.find((item, ind) => {
        return item === stepList[j] && (ind !== j);
      });

      if(dublicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        i-=2;
        break;
      }
    }
  }
  return list
}
sort863(result6);
// console.log(result6, result6.length)

let width6 = document.documentElement.clientWidth;
if(width6 < 1160){
   document.getElementById("slick-slide01").remove();
   document.getElementById("slick-slide02").remove();
   document.getElementById("slick-slide03").remove();
   document.getElementById("slick-slide04").remove();
   document.getElementById("slick-slide05").remove();
   document.getElementById("slick-slide00").remove();
   // document.querySelector('.our-friends-main').remove();
}
// id="slick-slide00" class="our-friends-pets swiper-wrapper slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" aria-describedby="slick-slide-control00" style="width: 1200px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"
// id="slick-slide01" class="our-friends-pets swiper-wrapper slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" aria-describedby="slick-slide-control01" style="width: 1200px; position: relative; left: -1200px; top: 0px; z-index: 998; opacity: 0;"><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-charly.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Charly</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-freddie.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Freddie</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-katrine.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Sophia</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-timmy.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Timmy</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-scarlet.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Scarlett</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-katrine_3.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Katrine</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-woody_3.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Woody</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div><div class="our-friends-pet swiper-slide"><img src="../../assets/pets-jennifer_3.png" alt="Image"><div class="our-friends-image"></div><p class="our-friends-name">Jennifer</p><div class="our-friends-button-box"><a href="javascript:void(0);" class="our-friends-button-learn-more" tabindex="-1">Learn more</a></div></div></id=>