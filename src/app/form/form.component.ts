import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.login = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.login.get('email') &&
      this.login.get('email')?.value &&
      this.login.get('password') &&
      this.login.get('password')?.value
    ) {
      let data: any = {
        email: this.login.value.email,
        password: this.login.value.password,
      };
      //console.log(data);
      this.loggedIn(data);
    }
  }

  loggedIn(data: any): void {
    this.http
      .post('http://localhost:8080/wonderpets-clinic/auth/login', data)
      .subscribe((response: any) => {
        //console.log(response);
        window.localStorage.setItem('token', response.access_token);
        this.router.navigate(['/home']);
      });
  }
}
