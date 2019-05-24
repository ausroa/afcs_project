import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public links: any[];

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
  }

}
