import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../Models/Empdetails.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiURL: string= 'https://localhost:7286';
  constructor( private http: HttpClient) { }

  getAllEmployees():Observable<EmployeeDetails[]>{
    return this.http.get<EmployeeDetails[]>(this.baseApiURL+'api/Employee');
  }
  addEmployee(addEmployeeRequest:EmployeeDetails):Observable<EmployeeDetails>{
    addEmployeeRequest.EmpId='1234556';
    return this.http.post<EmployeeDetails>(this.baseApiURL+'api/Employee',addEmployeeRequest);
  }
}
