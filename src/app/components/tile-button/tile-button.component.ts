import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tile-button',
  templateUrl: './tile-button.component.html',
  styleUrls: ['./tile-button.component.scss'],
  animations: [
    trigger('slideOut', [
      state('closed', style({
        width: '0px'
      })),
      state('open', style({
        width: '155px'
      })),
      transition('closed => open', animate(500)),
      transition('open => closed', animate(500))
    ])
  ]
})
export class TileButtonComponent implements OnInit {
  slideOut: boolean;

  @Input()
  tilePosition: number;

  @Input()
  tileButton: any;

  constructor() { }

  ngOnInit() {
    this.slideOut = true;
  }

  @HostListener('mouseenter', ['$event.target'])
  slideOpen() {
    this.slideOut = false;
  }

  @HostListener('mouseleave', ['$event.target'])
  slideClose() {
    this.slideOut = true;
  }
}
