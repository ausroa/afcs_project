import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { useAnimation } from '@angular/animations';
import { slideInRight } from 'ng-animate';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        width: 0
      })),
      transition('open => closed', [
        useAnimation(slideInRight)
      ]),
      transition('closed => open', [
        useAnimation(slideInRight)
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  public links: any[];
  public isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.links = [
      {linkName: 'Home', url: ''},
      {linkName: 'About', url: ''},
      {linkName: 'Careers', url: ''},
      {linkName: 'Find A Job', url: ''},
      {linkName: 'Contact', url: ''},
      {linkName: 'Social', url: ''}
    ];

    this.isOpen = false;
  }

  toggleSearch() {
    this.isOpen = !this.isOpen;
  }
}
