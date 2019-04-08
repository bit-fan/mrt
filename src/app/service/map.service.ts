import { Injectable } from '@angular/core';
import * as mapDataJSON from '../../assets/json/map_data.json';
import { Subject } from 'rxjs';
import { MRTService } from './mrt.service';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private mapData = mapDataJSON['default'];
  public drawPath$ = new Subject();
  public drawCircles$ = new Subject();
  constructor(private mrtSvc: MRTService) { }
  ngOnit() {

  }

  drawPath(path) {
    const nameArr = path.map(id => {
      return this.mrtSvc.getStationData(id).name;
    });
    const posArr = this.getPosArr(nameArr);
    this.drawPath$.next(posArr);
  }
  drawCircles(nameArr) {
    const posArr = this.getPosArr(nameArr);
    this.drawCircles$.next(posArr);
  }
  getPosArr(names) {
    return names.map(name => {
      return Array.isArray(this.mapData[name]) ? this.mapData[name] : ''
    }).filter(a => a);
  }
}
