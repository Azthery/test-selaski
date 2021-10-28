import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
    ) { }

    companies(): any{
      const token:any = localStorage.getItem('token');
      const headers =  new HttpHeaders({
        "Authorization": `bearer ${token}`
      })
      return this.http.post(`${this.URL}/companies`, {}, {headers});
    }

    company(id:number): any{
    const token:any = localStorage.getItem('token');
    const headers =  new HttpHeaders({
        "Authorization": `bearer ${token}`
      })
    return this.http.post(`${this.URL}/company`, {"company_id": id}, {headers});
  }
}
