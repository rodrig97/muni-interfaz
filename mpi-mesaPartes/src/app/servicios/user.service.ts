import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {
   
    private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }

    public getAllInfoUsers(): Observable<any>{
        return this.http.get(`${this.backendApi}/users/resumed`,);
    }
}