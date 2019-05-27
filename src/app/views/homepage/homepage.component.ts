import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('slideCardUp', [
      state('hidden', style({
        transform: 'translateY(100%)'
      })),
      state('shown', style({
        transform: 'translateY(0%) perspective(500px) translate3d(10px, 0, 100px)'
      })),
      transition('hidden => shown', animate(500)),
      transition('shown => hidden', animate(500))
    ])
  ]
})
export class HomepageComponent implements OnInit {
  public carouselCap: any;
  tileButtonsRM: any[];
  slideUp: boolean;

  constructor() { }

  ngOnInit() {
    this.slideUp = true;

    this.carouselCap = {
      text1: 'The air force',
      text2: 'Research Laboratory',
      text3: 'Lead. Discover. Develop. Deliver.'
    };

    this.tileButtonsRM = [
      {title: 'dod lab day', img: 'assets/images/slidesDOBLabDay.png', url: ''},
      {title: 'directorates', img: 'assets/images/slidesDirectories.png', url: ''},
      {title: 'about us', img: 'assets/images/slidesAboutUs.png', url: ''},
      {title: 'opportunities', img: 'assets/images/slidesOppurtunities.png', url: ''},
      {title: 'contact', img: 'assets/images/slidesContact.png', url: ''}
    ];
  }

  @HostListener('window:scroll', ['$event'])
  slideCardsUp() {
    this.slideUp = false;
    console.log('[You scrolled the window] Slide up Animation', this.slideUp);
  }
}
