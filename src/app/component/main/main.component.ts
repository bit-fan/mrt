import { Component, OnInit } from '@angular/core';
import { MRTService } from '../../service/mrt.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private mrtSvc: MRTService) { }

  ngOnInit() {
    this.mrtSvc.check();
  }
  query(evt) {
    this.mrtSvc.findRoutes(evt);
  }
}
