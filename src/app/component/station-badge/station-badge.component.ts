import { Component, OnInit, Input } from '@angular/core';
import { MRTService } from '../../service/mrt.service';


@Component({
  selector: 'app-station-badge',
  templateUrl: './station-badge.component.html',
  styleUrls: ['./station-badge.component.scss']
})
export class StationBadgeComponent implements OnInit {

  _num;
  stationData;
  @Input('stationNum')
  set(val) {
    this._num = val;
    this.stationData = this.mrtSvc.getStationData[val] || {};
  }
  get() {
    return this._num;
  }
  constructor(private mrtSvc: MRTService) { }

  ngOnInit() {
  }
}
