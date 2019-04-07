import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-station-num-badge',
  templateUrl: './station-num-badge.component.html',
  styleUrls: ['./station-num-badge.component.scss']
})
export class StationNumBadgeComponent implements OnInit {

  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }
  getLine(data) {
    if (!data) {
      return '';
    }
    return data.slice(0, 2).toLowerCase();
  }

}
