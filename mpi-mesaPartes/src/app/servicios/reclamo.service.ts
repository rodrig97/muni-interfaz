import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ReclamoService {
   
    private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }

    public getAllReclamos(): Observable<any>{
        return this.http.get(`${this.backendApi}/reclamos`,);
    }
}