import { Component, OnInit } from '@angular/core';
// import { Subscriber } from 'rxjs';
import { SolutionService } from './../../service/solution.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  solutionArr = [];
  solutionProp = {};
  constructor(private solutionSvc: SolutionService) { }

  ngOnInit() {
    this.solutionSvc.solutions$.subscribe(data => {
      this.solutionArr = data['data'] || [];
      this.solutionProp = data['prop'] || {};
    });
  }


}
