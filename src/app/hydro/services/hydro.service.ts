import { River } from './../model/hydro.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HydroService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

 
  getAllRivers(): Observable<River[]> {
    return this.http.get<River[]>('rivers');
  }

  createRiver(river: River): Observable<River> {
    return this.http.post<River>('rivers/create', river);
  }

  deleteRiver(riverId: string): Observable<any> {
    return this.http.delete(`rivers/${riverId}/delete`);
    
  }

  updateRiver(riverId: string | number, changes: Partial<River>): Observable<any> {
    return this.http.put(`rivers/${riverId}/update`, changes);
    
  }
}
