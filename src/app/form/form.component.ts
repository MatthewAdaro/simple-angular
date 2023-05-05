import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.login.get('username') &&
      this.login.get('username')?.value &&
      this.login.get('password') &&
      this.login.get('password')?.value
    ) {
      this.router.navigate(['/home']);
      console.log(this.login.value);
    }
  }
}
