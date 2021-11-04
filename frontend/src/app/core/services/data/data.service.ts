import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = environment.API;
  private token:any = localStorage.getItem('token');

  constructor(
    private http: HttpClient
    ) { }

  companies(): any{
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/companies`, {}, {headers});
    }

  editCompany(data: any): any{
      const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
      return this.http.post(`${this.URL}/editcompany`, data, {headers});
    }

  shipmentsForIdCompany(id:number): any{
      const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
      return this.http.post(`${this.URL}/company`, {"company_id": id}, {headers});
  }

  createShipment(data: any){
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/createshipment`, data, {headers});
  }

  editshipment(data: any){
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/editshipment`, data, {headers});
  }

  updateStatusShip(data: any): any{
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/updatestatusship`, data, {headers});
  }

  loot(id: number):any {
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/loot`, {"company_id": id}, {headers});
  }
  
}
