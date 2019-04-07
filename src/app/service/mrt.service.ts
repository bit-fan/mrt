import { Injectable } from '@angular/core';
import * as originalStationJSON from '../../assets/stations.json';
import { UtilService } from './util.service';
import { Station } from '../model/station';
import { Route } from '../model/route';
import { Solution } from './../model/solution';
import { SolutionService } from './solution.service';

@Injectable({
  providedIn: 'root'
})

export class MRTService {

  srcObj: any;
  stationData: any = {};
  stationNametoId = {};
  allLines: any[] = [];
  constructor(private util: UtilService, private solutionSvc: SolutionService) {
    this.srcObj = originalStationJSON['default'];
    const possibleStation = new Set();
    const lineMinMax: any = {};

    // initilise data
    Object.keys(this.srcObj).forEach((stationName, idx) => {
      const dataObj = this.srcObj[stationName];
      const newStation = new Station();
      const stationId = idx + 1;
      newStation.name = stationName;

      Object.keys(dataObj).forEach(line => {
        const order = dataObj[line];

        lineMinMax[line] = lineMinMax[line] || { min: 10000, max: -1 };
        if (Array.isArray(order)) {
          order.forEach(num => {
            lineMinMax[line].min = Math.min(lineMinMax[line].min, num);
            lineMinMax[line].max = Math.max(lineMinMax[line].max, num);
            this.stationNametoId[line + num] = stationId;
            possibleStation.add(line + num);
            newStation.stationNames.push(line + num);
            newStation.isInterChange = true;
          })
        } else {
          lineMinMax[line].min = Math.min(lineMinMax[line].min, order);
          lineMinMax[line].max = Math.max(lineMinMax[line].max, order);
          possibleStation.add(line + order);
          newStation.stationNames.push(line + order);
          this.stationNametoId[line + order] = stationId;
          newStation.isInterChange = false;
        }
      });
      this.stationData[stationId] = newStation;
      // this.stationObj[] = '';
    });
    // console.log(this.stationData, possibleStation, lineMinMax, this.stationNametoId);

    // setup links
    Object.keys(this.stationData).forEach(id => {
      this.stationData[id].stationNames.forEach(thisMRT => {
        const line = thisMRT.slice(0, 2);
        const num = Number(thisMRT.slice(2));
        let num1 = num - 1;
        while (num1 >= lineMinMax[line].min) {
          if (possibleStation.has(line + num1)) {
            this.stationData[id].links.push(this.stationNametoId[line + num1]);
            break;
          }
          num1--;
        }
        let num2 = num + 1;
        while (num2 <= lineMinMax[line].max) {
          if (possibleStation.has(line + num2)) {
            this.stationData[id].links.push(this.stationNametoId[line + num2]);
            break;
          }
          num2++;
        }
      })
    });
    Object.keys(this.stationData).forEach(id => {
      this.stationData[id].links = Array.from(new Set(this.stationData[id].links));
    });
    console.log(this.stationData, possibleStation, lineMinMax);
    this.allLines = Object.keys(lineMinMax);
  }
  getAllStation() {
    return this.stationData;
  }
  getAllLines() {
    return this.allLines;
  }
  getStationData(num) {
    return this.stationData[num];
  }
  check() {
    console.log('sss', this.srcObj);
  }
  findRoutes(query) {
    let pathArr;
    if (query.type === 'dist') {
      pathArr = this.getShortestPath(query.from, query.to, query.best);
      console.log(pathArr);

    } else if (query.type === 'dist') {
      pathArr = this.getShortestPath(query.from, query.to, query.best);
      console.log(pathArr);
    }
    const solutionArr = pathArr.map(path => {
      const solution = new Solution(path);
      const soluObj = Solution.createRouteText(path.map(a => this.stationData[a]));
      return { prop: { numStops: path.length }, solution: soluObj };
    });

    this.solutionSvc.updateSolution({
      from: this.stationData[query.from],
      to: this.stationData[query.to],
      best: query.best
    }, solutionArr);
  }
  getShortestPath(from, to, max = 5) {
    console.log(from, to, max);
    const allPaths: Route[] = [];
    allPaths.push(new Route([Number(from)]));
    return this.loopPath([], allPaths, {}, to, max, 'dist');

  }
  loopPath(solutionArr, allPaths: Route[], hitMap, to, max, type) {
    // if (max <= 0) {
    //   // console.log(allPaths);
    //   allPaths.forEach(a => {
    //     console.log(
    //       a.path.map(id =>
    //         this.stationData[id].name).join(', '));
    //   })
    //   return;
    // }
    const newPathtoAdd = [];
    allPaths.filter(route => !route['tbd']).forEach(route => {
      const lastStaId = route.path[route.path.length - 1];
      if (lastStaId != to) {
        this.stationData[lastStaId].links.forEach(newStaId => {
          if (hitMap[newStaId] > max) {
            // console.log(this.stationData[newStaId].name, ' exceeds');
            return false;
          }
          if (!route.containsStation(newStaId)) {
            hitMap[newStaId] = hitMap[newStaId] || 0;
            hitMap[newStaId]++;
            let newRoute = new Route(route.path);
            newRoute.addStaToPath(newStaId);
            newPathtoAdd.push(newRoute);
            // console.log('a');
          }
        })
        // route['tbd'] = true;
      } else {
        solutionArr.push(route.path);
        console.log(
          solutionArr.length, route.path.map(id =>
            this.stationData[id].name).join(', '));
      }
    })
    // if (newPathtoAdd.length > 5000) {
    //   return;
    // }
    // console.log(newPathtoAdd.length);
    // newPathtoAdd.forEach(a => {
    //   console.log(
    //     a.path.map(id =>
    //       this.stationData[id].name).join(', '));
    // })

    if (solutionArr.length >= max) {
      return solutionArr.slice(0, max);
    }
    if (newPathtoAdd.length === 0) {
      return solutionArr;
    }
    return this.loopPath(solutionArr, newPathtoAdd, hitMap, to, max, type);
  }
}
