import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;

  get userEmail() {
    return this.loginForm.get('email');
  }

  get userPassword() {
    return this.loginForm.get('password');
  }

  constructor(private formData: FormBuilder, private route: Router) {}

  loginForm = this.formData.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
  });

  ngOnInit(): void {}

  register() {
    this.route.navigateByUrl('registration');
  }
  onSubmit(): any {
    if (this.login.valid) {
      console.log(this.login.value);
    } else {
      alert('Please fill all fields');
    }
  }
}

/* this.login = this.formData.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    }); */
