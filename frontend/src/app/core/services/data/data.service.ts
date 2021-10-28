import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:3000';
  private token:any = localStorage.getItem('token');

  constructor(
    private http: HttpClient
    ) { }

    companies(): any{
      const headers =  new HttpHeaders({
        "Authorization": `bearer ${this.token}`
      })
      return this.http.post(`${this.URL}/companies`, {}, {headers});
    }

    editCompany(data: any): any{
      const headers =  new HttpHeaders({
        "Authorization": `bearer ${this.token}`
      })
      return this.http.post(`${this.URL}/editcompany`, data, {headers});
    }

    shipmentsForIdCompany(id:number): any{
    const headers =  new HttpHeaders({
        "Authorization": `bearer ${this.token}`
      })
    return this.http.post(`${this.URL}/company`, {"company_id": id}, {headers});
  }
}
