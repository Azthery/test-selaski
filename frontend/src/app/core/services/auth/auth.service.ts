import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  singin(user: any){
    return this.http.post(`${this.URL}/singin`, user);
  }
  singup(user: any){
    return this.http.post(`${this.URL}/singup`, user);
  }

  logged():boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  signout():any{
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
