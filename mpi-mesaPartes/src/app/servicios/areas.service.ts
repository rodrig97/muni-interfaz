import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AreaService {
   
    private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }

    public getAllAreas(): Observable<any>{
        return this.http.get(`${this.backendApi}/areas`,);
    }
}