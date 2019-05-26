import {AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

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
      {url: 'assets/images/Directed Energy.jpg'},
      {url: 'assets/images/home_1.jpg'}
    ];
  }
}
