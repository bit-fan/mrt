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
      console.log(this.solutionArr, this.pathArr);
      // getPosArr
    });
  }
  mouseoverPath(idx, solu, path) {
    console.log(this.pathArr[idx], solu, path);
    this.mapSvc.drawPath(this.pathArr[idx]);
  }


}
