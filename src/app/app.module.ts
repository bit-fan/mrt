import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultComponent } from './component/result/result.component';
import { MainComponent } from './component/main/main.component';
import { SelectionComponent } from './component/selection/selection.component';

// service
import { MRTService } from './service/mrt.service';
@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    MainComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MRTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
