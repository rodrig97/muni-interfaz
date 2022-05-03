import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MPVService {
   
    private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }
    public getAllDataMPV(){
        return this.http.get(`${this.backendApi}/mpvirtual`);
    }

    public saveTramiteSGD(data:any){
        return this.http.post(`${this.backendApi}/mpvirtual/sendtramite/`, data);
    }

    public sendMailCustom(req: Request){
        return this.http.post(`${this.backendApi}/mpvirtual/sendmailcustom`, req);
    }
    public createExpedienteSisgedo(data:any){
        return this.http.post(`${this.backendApi}/mpvirtual/createExpedienteSisgedo/`, data);
    }
/*
    public enviarCorreo(req: Request, expe_id: any, content: any, mode: any){
        return this.http.post(`${this.backendApi}/reclamos/presentar`, req);
    }*/

/*    public presentarTramite(req: Request){
        return this.http.post(`${this.backendApi}/mpvirtual/presentar`, req);
    }*/

}