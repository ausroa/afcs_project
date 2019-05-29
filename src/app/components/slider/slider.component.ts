import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderImgs: any[];

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
  };

  constructor() { }

  ngOnInit() {
    this.sliderImgs = [
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/Directed Energy.jpg'},
    ];
  }

}
