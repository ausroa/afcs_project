import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'carousel-img',
  template: `
    <img src="{{image.url}}" alt="Random first slide" height="auto" width="auto" #carouselImg>
  `,
  styleUrls: ['./carousel-img.component.scss']
})
export class CarouselImgComponent implements OnInit, DoCheck {
  @Input()
  public image: any;

  constructor() { }

  ngOnInit() {

  }

  ngDoCheck(): void {

  }
}
