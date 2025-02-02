import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dental/patients/`)
  }
}
