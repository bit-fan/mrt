import { Injectable } from '@angular/core';
// import { Solution } from '../model/solution';
import { Subject } from 'rxjs';
// import { MapService } from './map.service';
// import { MRTService } from './mrt.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  public solutions$ = new Subject();
  constructor() { }
  updateSolution(prop, solu, path) {
    console.log('recei', solu);
    this.solutions$.next({ prop: prop, data: solu, path: path });
  }
}
