import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient
  ) { }

  createUser(email: string, password: string): any{
  }

  signin(user: any){
    return this.http.post(`${this.URL}/users/singin`, user);
  }

  logOut(): any {
  }

  user(): any{
  }

  hasUser(): any {
  }
}
