import { Station } from './station';
export class Route {
  path: any[];
  numChange: Number;
  constructor(path: any[]) {
    this.path = Array.from(path);
    this.numChange = 0;
  }
  containsStation(staId) {
    return this.path.includes(staId);
  }
  addStaToPath(staId) {
    this.path.push(staId);
  }
}