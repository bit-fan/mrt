import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-route-text',
  templateUrl: './display-route-text.component.html',
  styleUrls: ['./display-route-text.component.scss']
})
export class DisplayRouteTextComponent implements OnInit {

  @Input('data') data;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
