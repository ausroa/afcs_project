import {Component, Input, OnInit} from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input()
  public data: Data;

  @Input()
  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
