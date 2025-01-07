import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseurl="http://localhost:8081/api/v1/insert";
  private baseurl2="http://localhost:8081/api/v1/getall";
  private baseurl3="http://localhost:8081/api/v1/";
  constructor(private http:HttpClient) { }

  addemp(records : Registration) : Observable<any> {
    return this.http.post<any>(`${this.baseurl}`,records);
  }
  getemp():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl2}`);
  }

  getbyemail(email : string):Observable<Registration>
  {
    return this.http.get<Registration>(`${this.baseurl3}getbyemail/${email}`);
  }

  delete(id : number):Observable<Registration>
  {
    return this.http.delete<Registration>(`${this.baseurl3}delete/${id}`);
  }
}
