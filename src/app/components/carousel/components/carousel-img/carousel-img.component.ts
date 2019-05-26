import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'carousel-img',
  templateUrl: './carousel-img.component.html',
  styleUrls: ['./carousel-img.component.scss'],
})
export class CarouselImgComponent implements OnInit, OnChanges {
  fade: boolean;

  @Input()
  public image: any;

  @Input()
  activeImg: any;

  constructor() { }

  ngOnInit() {
    this.fade = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
