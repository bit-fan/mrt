import { Injectable } from '@angular/core';
import * as station from '../../assets/stations.json';

@Injectable({
  providedIn: 'root'
})

class Station {
  name: String;
  // line: String;
  // order: Number;
  alters: any[] = [];
  links: any[] = [];
  isInterChange: Boolean;

}

class route {
  path: any[];
  tail: Station;
  preTail: Station;
  numChange: Number;
}
export class MRTService {

  srcObj: any;
  stationData: any = {};
  stationNametoId = {};
  constructor() {
    this.srcObj = station['default'];
    const possibleStation = new Set();
    const lineInfo: any = {};

    // initilise data
    Object.keys(this.srcObj).forEach((stationName, idx) => {
      const dataObj = this.srcObj[stationName];
      const newStation = new Station();
      const stationId = idx + 1;
      newStation.name = stationName;

      Object.keys(dataObj).forEach(line => {
        const order = dataObj[line];

        lineInfo[line] = lineInfo[line] || { min: 10000, max: -1 };
        if (Array.isArray(order)) {
          order.forEach(num => {
            lineInfo[line].min = Math.min(lineInfo[line].min, num);
            lineInfo[line].max = Math.max(lineInfo[line].max, num);
            this.stationNametoId[line + num] = stationId;
            possibleStation.add(line + num);
            newStation.alters.push(line + num);
            newStation.isInterChange = true;
          })
        } else {
          lineInfo[line].min = Math.min(lineInfo[line].min, order);
          lineInfo[line].max = Math.max(lineInfo[line].max, order);
          possibleStation.add(line + order);
          newStation.alters.push(line + order);
          this.stationNametoId[line + order] = stationId;
          newStation.isInterChange = false;
        }
      });
      this.stationData[stationId] = newStation;
      // this.stationObj[] = '';
    });
    console.log(this.stationData, possibleStation, lineInfo, this.stationNametoId);

    // setup links
    Object.keys(this.stationData).forEach(id => {
      this.stationData[id].alters.forEach(thisMRT => {
        const line = thisMRT.slice(0, 2);
        const num = Number(thisMRT.slice(2));
        let num1 = num - 1;
        while (num1 >= lineInfo[line].min) {
          if (possibleStation.has(line + num1)) {
            this.stationData[id].links.push(line + num1);
            break;
          }
          num1--;
        }
        let num2 = num + 1;
        while (num2 <= lineInfo[line].max) {
          if (possibleStation.has(line + num2)) {
            this.stationData[id].links.push(line + num2);
            break;
          }
          num2++;
        }
      })
    });
    console.log(this.stationData, possibleStation, lineInfo);

  }
  getAllStation() {
    return this.stationData;
  }
  check() {
    console.log('sss', this.srcObj);
  }
  findRoutes(query) {

  }
}
