import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    HTMLOutputElement: any;
   
    //private backendApi = environment.backendApi;
    
    constructor(private http: HttpClient) {
    
    }

    getAllProducts(){
        return this.http.get<any>('../../assets/products-small.json');
    }
}

/*customer.ts
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    activity?: number;
    representative?: Representative;
}
*/



/*
customerservice.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/customers-small.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersXLarge() {
        return this.http.get<any>('assets/customers-xlarge.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

}*/