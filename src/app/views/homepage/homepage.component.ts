import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public carouselCap: any;

  constructor() { }

  ngOnInit() {
    this.carouselCap = {
      text1: 'The air force',
      text2: 'Research Laboratory',
      text3: 'Lead. Discover. Develop. Deliver.'
    };
  }
}
