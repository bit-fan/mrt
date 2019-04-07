import { Injectable } from '@angular/core';
import * as mapDataJSON from '../../assets/map_data.json';
import { Subject } from 'rxjs';
import { MRTService } from './mrt.service';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private mapData = mapDataJSON['default'];
  public drawPath$ = new Subject();
  constructor(private mrtSvc: MRTService) { }
  ngOnit() {

  }

  drawPath(path) {
    const nameArr = path.map(id => {
      return this.mrtSvc.getStationData(id).name;
    });
    // this.drawPathfromMRTNameArr(nameArr);

    const posArr = this.getPosArr(nameArr);
    console.log(posArr);
    this.drawPath$.next(posArr);
  }
  getPosArr(names) {
    return names.map(name => {
      return Array.isArray(this.mapData[name]) ? this.mapData[name] : ''
      // return this.mapData[name] || '';
      // if (this.mapData[name])) {
      //   return pos;
      // } else { return ''; }
    }).filter(a => a);
  }
  // drawPathfromMRTNameArr(names) {
  //   const posArr = this.getPosArr(names);
  //   this.drawPath.next(posArr);
  // }
}
