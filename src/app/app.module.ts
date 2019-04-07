import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultComponent } from './component/result/result.component';
import { MainComponent } from './component/main/main.component';
import { SelectionComponent } from './component/selection/selection.component';

// service
import { MRTService } from './service/mrt.service';
import { UtilService } from './service/util.service';
import { SolutionService } from './service/solution.service';
import { DisplayRouteTextComponent } from './component/result/display-route-text/display-route-text.component';
import { StationBadgeComponent } from './component/station-badge/station-badge.component';
import { StationNumBadgeComponent } from './component/station-num-badge/station-num-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    MainComponent,
    SelectionComponent,
    DisplayRouteTextComponent,
    StationBadgeComponent,
    StationNumBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MRTService, UtilService, SolutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
