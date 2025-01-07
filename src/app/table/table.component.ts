import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  records:Registration[]=[];
  constructor(private service:RegistrationService){}

  ngOnInit()
  {
    this.service.getemp().subscribe(data => this.records=data);
  }
  
}
