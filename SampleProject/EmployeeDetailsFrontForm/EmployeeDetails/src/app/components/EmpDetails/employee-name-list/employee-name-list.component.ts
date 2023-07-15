import { Component,OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/Models/Empdetails.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-name-list',
  templateUrl: './employee-name-list.component.html',
  styleUrls: ['./employee-name-list.component.css']
})

export class EmployeeNameListComponent implements OnInit {
EmployeeDetails : EmployeeDetails[] =[];
  
constructor(private employeesservices: EmployeeService) { }

ngOnInit(): void { 
  
  this.employeesservices.getAllEmployees()
  .subscribe ( {
    next: (Empdetails)=>{
     console.log(Empdetails);
     //this.EmployeeDetails =EmployeeDetails;
    },
    error: (response:any) =>{
      console.log(response);
    }
    
  })

}
}
