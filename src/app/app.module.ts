import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component'; // Import MissiondetailsComponent
import { MissionlistComponent } from './missionlist/missionlist.component'; // Import MissionlistComponent

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule, // Add FormsModule to imports array
    MissionlistComponent, // Add MissionlistComponent to declarations array
    MissiondetailsComponent // Add MissiondetailsComponent to declarations array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
