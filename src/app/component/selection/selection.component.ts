import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MRTService } from '../../service/mrt.service';
import { MapService } from './../../service/map.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private mrtSvc: MRTService, private mapSvc: MapService) { }
  allStation: any[] = [];
  filteredMRT: any[] = [];
  fromMRT;
  toMRT;
  pathType = 'dist';
  bestOptions = [3, 5, 10, 20];
  numBest = this.bestOptions[0];
  showFilterBox = false;
  showBest = false;
  allLines;
  filterName = '';
  filterLine = 'any';
  filterInter = 'all';
  selectFor = '';
  queryInvalid = true;
  @Output('queryNow') queryNow = new EventEmitter();
  ngOnInit() {
    const mrtObj = this.mrtSvc.getAllStation();
    this.allStation = Object.keys(mrtObj).map(a => {
      mrtObj[a].id = a;
      return mrtObj[a];
    });

    this.allLines = this.mrtSvc.getAllLines();
    this.filterMRT();
  }
  filterMRT() {
    const lower = this.filterName && this.filterName.toLowerCase();
    this.filteredMRT = this.allStation.filter(sta => {
      if (lower) {
        if (sta.name.toLowerCase().indexOf(lower) === -1) {
          return false;
        }
      }
      if (this.filterLine !== 'any') {
        if (!sta.stationNames.some(line => line.indexOf(this.filterLine) !== -1)) {
          return false;
        }
      }
      if (this.filterInter !== 'all') {
        return sta.isInterChange != (this.filterInter === 'yes' ? true : false);
      }
      return true;
    })
  }
  sendQuery() {
    this.showFilterBox = false;
    this.queryNow.emit({
      from: this.fromMRT.id,
      to: this.toMRT.id,
      type: this.pathType,
      best: this.numBest
    });
    this.mapSvc.drawCircles([]);
    this.mapSvc.drawPath([]);
  }
  showSelection(which) {
    this.selectFor = which;
    this.showFilterBox = true;
  }
  changeRank() {
    this.pathType = this.pathType === 'dist' ? 'change' : 'dist';
  }
  setMRT(mrt) {
    if (this.selectFor === "from") {
      this.fromMRT = mrt;
    } else {
      this.toMRT = mrt;
    }
    this.showFilterBox = false;
    if (!this.fromMRT || !this.toMRT) {
      this.queryInvalid = true;
    } else {
      this.queryInvalid = false;
    }
  }

}
