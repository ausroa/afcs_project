import { Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.scss']
})
export class NgbdCarouselBasicComponent implements OnInit {
  @ViewChild('carouselImgs') public image: any;
  public carouselImgsUrls: any[];

  constructor() { }

  ngOnInit() {
    this.carouselImgsUrls = [
      {url: 'assets/images/Directed Energy.jpg', id: 'ngb-slide-0'},
      {url: 'assets/images/home_1.jpg', id: 'ngb-slide-1'}
    ];

    if(!this.image.activeId) {
      this.image.activeId = 'ngb-slide-0';
    }
  }
}
