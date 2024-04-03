import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3/';

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}launches`);
  }

  getMissionByFlightNumber(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}launches/${flightNumber}`);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}launches?launch_year=${year}`);
  }
}