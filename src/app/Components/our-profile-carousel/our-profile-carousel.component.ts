import { Component, OnInit } from '@angular/core';
import SwiperCore,{SwiperOptions,Navigation } from 'swiper'

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-our-profile-carousel',
  templateUrl: './our-profile-carousel.component.html',
  styleUrls: ['./our-profile-carousel.component.scss']
})
export class OurProfileCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
   
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    scrollbar: { draggable: true },
    autoplay: {delay: 5000},
  };
  // onSwiper(swiper:any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
