import { Component } from '@angular/core';
import {
  CommonModule,
  NgFor,
} from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent {
  registrationForm: FormGroup;

  fields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      errorMessage: 'Name is required',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      errorMessage: 'Valid email is required',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      errorMessage: 'Last Name is required',
    },
    {
      id: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      placeholder: 'Enter your mobile number',
      errorMessage: 'Valid mobile number is required',
    },
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Choose a username',
      errorMessage: 'Valid username is required',
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password',
      errorMessage: 'Password must be at least 8 characters',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,}$')],
      ],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Registration Successful!');
      console.log(this.registrationForm.value);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
