import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private URL = 'http://localhost:3000';
  private token:any = localStorage.getItem('token');


  constructor(
    private http: HttpClient
  ) { }

  allCompanies(): any{
    const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    return this.http.post(`${this.URL}/all_companies`, {}, {headers});
  }
    
  getACompany(data: any): any{
      const headers =  new HttpHeaders({"Authorization": `bearer ${this.token}`})
    
      return this.http.post(`${this.URL}/get_a_company`, data, {headers});
  }
}
