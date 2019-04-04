import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MRTService } from '../../service/mrt.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private mrtSvc: MRTService) { }
  allStation: any[] = [];
  fromMRT;
  toMRT;
  @Output('queryNow') queryNow = new EventEmitter();
  ngOnInit() {
    const mrtObj = this.mrtSvc.getAllStation();
    this.allStation = Object.keys(mrtObj).map(a => {
      mrtObj[a].id = a;
      return mrtObj[a];
    });
  }
  sendQuery() {
    this.queryNow.emit({
      from: this.fromMRT,
      to: this.toMRT
    })
  }

}
