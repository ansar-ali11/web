import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formgroup!: FormGroup;

  constructor(
    private service: RegistrationService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formgroup = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

  onsubmit() {
    if (this.formgroup.valid) {
      const email = this.formgroup.value.email;
      const password = this.formgroup.value.password;
  
      // Call the service to get employee data by email
      this.service.getbyemail(email).subscribe(
        data => {
          console.log(data);
          if (!data) {
            alert('Employee not found!');
            return;
          }
  
          // Check if the employee exists and if password matches
          if (data.password === password) {
            this.router.navigate(['/dashboard']); // Navigate to dashboard on success
          } else {
            alert('Invalid email or password!');
          }
        },
        error => {
          console.error('Login failed', error);
          alert('An error occurred. Please try again later.');
        }
      );
    } else {
      alert('Please enter valid email and password.');
    }
  }
  
}
