import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private backendApi = environment.backendApi;

  constructor(private http: HttpClient) {

  }
  // ruta api laravel = files/custom
  public getAllFiles(): Observable<any>{
    return (this.http.get( `${this.backendApi}/files/custom`,));
  }
}
