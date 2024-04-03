// missiondetails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [ CommonModule ]
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | undefined;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService
  ) {}

  ngOnInit(): void {
    // Get the flightNumber from the route parameter
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    if (flightNumber) {
      // Fetch the mission details based on the flightNumber
      this.spaceXService.getMissionByFlightNumber(flightNumber).subscribe((mission: Mission) => {
        this.mission = mission;
      });
    }
  }
}
