import { Injectable } from '@angular/core';
import { Solution } from '../model/solution';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  public solutions$ = new Subject();
  constructor() { }
  updateSolution(prop, solu) {
    console.log('recei', solu);
    this.solutions$.next({ prop: prop, data: solu });
  }
}
