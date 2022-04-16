import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PideService {
   
    private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }

    searchDni(dni: any,codigo:any) {
        return this.http.get(
            `${this.backendApi}/pide/reniec/${dni}/${codigo}`,
        );
      }
    }