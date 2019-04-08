import { Component, OnInit } from '@angular/core';
// import { Subscriber } from 'rxjs';
import { SolutionService } from './../../service/solution.service';
import { Solution } from './../../model/solution';
import { MapService } from './../../service/map.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  solutionArr = [];
  solutionProp = {};
  pathArr: any[] = [];
  constructor(private solutionSvc: SolutionService, private mapSvc: MapService) { }

  ngOnInit() {
    this.solutionSvc.solutions$.subscribe(data => {
      this.solutionArr = data['data'] || [];
      this.solutionProp = data['prop'] || {};
      this.pathArr = data['path'] || [];
    });
  }
  mouseoverPath(idx, solu) {
    this.mapSvc.drawPath(this.pathArr[idx]);
    const pts = [solu[0].from.name];
    solu.forEach(sta => {
      pts.push(sta.to.name);
    })
    this.mapSvc.drawCircles(pts);
  }


}
