import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, {
  Autoplay,
  Pagination,
  SwiperOptions,
  EffectCreative,
} from 'swiper';
declare var ScrollMagic: any;
declare var TimelineMax: any;
declare var TimelineMax: any;

SwiperCore.use([Autoplay, Pagination, EffectCreative]);
@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }
  viewMore($myParam: string = ''): void {
    const navigationDetails: string[] = ['/service-page'];
    this.router.navigate(navigationDetails);
  }
  // ngAfterViewInit() {
  //   var controller = new ScrollMagic.Controller();
  //   var wipeAnimation = new TimelineMax()
  //     // animate to second
  //     .to('#slideContainer', 1, { z: -180 })
  //     .to('#slideContainer', 1, { x: '-25%' })
  //     .to('#slideContainer', 1, { z: 0 })
  //     // animate to third
  //     .to('#slideContainer', 1, { z: -180, delay: 0.6 })
  //     .to('#slideContainer', 1, { x: '-50%' })
  //     .to('#slideContainer', 1, { z: 0 })
  //     // animate to forth
  //     .to('#slideContainer', 1, { z: -180, delay: 0.6 })
  //     .to('#slideContainer', 1, { x: '-75%' })
  //     .to('#slideContainer', 1, { z: 0 });

  //   var scene = new ScrollMagic.Scene({
  //     triggerElement: '#pinContainer',
  //     triggerHook: 'onLeave',
  //     duration: '600%', //이 값이 클 수록 천천히 덮어씀
  //   })
  //     .setPin('#pinContainer')
  //     .setTween(wipeAnimation)
  //     .addIndicators()
  //     .addTo(controller);
  // }

  // --------------



  // ----------------

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    // autoplay: {
    //   delay: 7000,
    //   disableOnInteraction: false,
    // },
  };
  // onSwiper(swiper: any) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
