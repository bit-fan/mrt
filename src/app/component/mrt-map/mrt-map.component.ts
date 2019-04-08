import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MapService } from './../../service/map.service';

@Component({
  selector: 'app-mrt-map',
  templateUrl: './mrt-map.component.html',
  styleUrls: ['./mrt-map.component.scss']
})
export class MrtMapComponent implements OnInit {

  pathString = '';
  dashArray: any = '';
  dashIdx = 0;
  circles: any = [];
  constructor(private mapSvc: MapService) { }

  ngOnInit() {
    this.mapSvc.drawPath$.subscribe(data => {
      this.pathString = this.generatePath(data as any[]);
    });
    this.mapSvc.drawCircles$.subscribe(data => {
      this.circles = data;
    });
  }
  generatePath(pts: any[]) {
    if (pts.length === 0) {
      return '';
    }
    const getStr = pt => {
      return pt[0] + ', ' + pt[1];
    }
    let str = 'M' + getStr(pts[0]);
    for (let idx = 1; idx < pts.length; idx++) {
      str += ' L' + getStr(pts[idx]);
    }
    return str;

  }

}
