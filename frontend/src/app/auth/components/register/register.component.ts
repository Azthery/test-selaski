import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup = this.buildForm();
  public anyError = false;
  public wrongPass = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.refreshValidatorConfirmPass();
  }
  
  buildForm(username?: string | ''): FormGroup{
    return this.formBuilder.group({
      username: [username, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['']
    })
  }

  register(event: Event): void{
    event.preventDefault();
    if(this.form.value.password !== this.form.value.confirmPass) this.wrongPass = true;
    console.log(this.form.value)

    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    };

    this.authService.singup(user).subscribe( (res: any) => {
      if(res === 'error'){
        this.anyError = true
        return;
      };
      this.anyError = false;
      this.router.navigate(['/login']);
    })
  }

  refreshValidatorConfirmPass(): void{
    this.form.controls['password'].valueChanges.subscribe( password =>{
      this.form.get("confirmPass")?.setValidators(
        [Validators.required, Validators.pattern(password)]
      );
    });
  }
}
