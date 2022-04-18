import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const backendApi = environment.backendApi;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${backendApi}/auth/login`, data);
  }
}
