import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.buildForm();
  public wrongData: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {};

  ngOnInit(): void {
  };

  private buildForm(username?: string | '' ): FormGroup{
    return this.formBuilder.group({
      username: [username, [Validators.required]],
      password: ['', [Validators.required]],
    })
  };

  login(event: Event): void{
    event.preventDefault();

    const user = this.form.value;
    this.authService.signin(user).subscribe( (res: any) => {
      if(typeof res !== 'object'){
        this.wrongData = true
        return
      };
      this.wrongData = false;
      localStorage.setItem('token', res.token);
      this.router.navigate(['/companies']);
    })
  };
}
