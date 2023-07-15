import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/Models/Empdetails.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest :EmployeeDetails={
    EmpId:'',
    FirstName:'',
    LastName:'',
    Email:'',
    ContactNo:0
  };
  constructor( private employeeService: EmployeeService) {}
  ngOnInit(): void {
    
  }
  addEmployee(){
    //console.log(this.addEmployeeRequest);
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (Empdetails) => {
        console.log(Empdetails);
      }
    });
  }

}
