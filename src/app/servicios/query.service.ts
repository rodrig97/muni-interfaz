import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private backendApi = environment.backendApi;

  constructor(private http: HttpClient) {}

  subirArchivo(data: any) {
    return this.http.post(`${this.backendApi}/grl/general/subir-archivo`, data);
  }
}
