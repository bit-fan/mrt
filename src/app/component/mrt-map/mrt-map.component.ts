import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MapService } from './../../service/map.service';

@Component({
  selector: 'app-mrt-map',
  templateUrl: './mrt-map.component.html',
  styleUrls: ['./mrt-map.component.scss']
})
export class MrtMapComponent implements OnInit {

  test1 = '';

  constDashArr = ['0, 100', '20, 80', '40, 60', '60,40', '80,20', '100,0'];
  dashIdx = 0;
  constructor(private mapSvc: MapService) { }

  ngOnInit() {
    // this.test1 = this.generatePath([[300, 400], [500, 800], [700, 400]]);
    this.mapSvc.drawPath$.subscribe(data => {
      this.test1 = this.generatePath(data as any[]);
    });
    setInterval(() => {
      this.dashArray = this.constDashArr[(++this.dashIdx) % this.constDashArr.length];
    }, 500);
  }
  generatePath(pts: any[]) {
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
