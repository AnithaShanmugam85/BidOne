import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNameListComponent } from './components/EmpDetails/employee-name-list/employee-name-list.component';
import { AddEmployeeComponent } from './components/EmpDetails/add-employee/add-employee.component';

const routes: Routes = [
  {
    path :'',
    component:EmployeeNameListComponent
  },
  {
    path :'EMPBasicDetails',
    component:EmployeeNameListComponent
  },
  {
    path :'EMPBasicDetails/add',
    component:AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
