import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../models/mission';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  missions: Mission[] = [];
  searchTerm: string = "";
  yearFilter: string = "";
  constructor(
    private spaceXService: SpaceXService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.spaceXService.getAllMissions().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  showMissionDetails(flightNumber: string): void {
    this.router.navigate(['/mission-details', flightNumber]);
  }

  get filteredMissions(): Mission[] {
    return this.missions.filter(mission =>
      mission.mission_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  applyYearFilter(): void {
    if (this.yearFilter !== null) {
      this.spaceXService.getMissionsByYear(this.yearFilter).subscribe((missions: Mission[]) => {
        this.missions = missions;
      });
    }
  }

  clearYearFilter(): void {
    this.yearFilter = "";
    this.fetchMissions(); // Fetch all missions again to clear the filter
  }

}
