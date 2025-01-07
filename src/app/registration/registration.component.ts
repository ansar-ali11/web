import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formgroup!: FormGroup;
  constructor(private fb: FormBuilder, private service: RegistrationService) {
    this.formgroup = fb.group({
      id: [null],
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(55)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      mobilenumber: ["", [Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit() {
    this.onsubmit();
    this.del();
  }

  onsubmit() {
    if (this.formgroup.valid)
      this.service.addemp(this.formgroup.value).subscribe(data => {
        alert("data inserted successfully");
      });
  }

  del() {
    if(this.formgroup.value.id)
    {
      if (confirm('Are you sure you want to delete this employee?'))
      {
        this.service.delete(this.formgroup.value.id).subscribe(() => {
          alert("employee deleted succussfully");
          this.formgroup.reset(); 
        });
      }
    }
  }
}
