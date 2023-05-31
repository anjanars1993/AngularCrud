import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { DisplayEmployeeComponent } from './display-employee.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  @ViewChild('displayEmployee') dispEmp:DisplayEmployeeComponent=new DisplayEmployeeComponent;
  employeeToDisplay:Employee=new Employee();
  employees:Employee[]=[];
  displayNumber:number=1;
  selectedEmployee:Employee=new Employee();
constructor(private _employeeService:EmployeeService,private _router:Router){}
  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees()
    this.employeeToDisplay=this.employees[0];
  }
  NextEmployee()
  {
    if(this.displayNumber>2)
    {
      this.employeeToDisplay=this.employees[0];
      this.displayNumber=1;
    }
    else
    {
      this.employeeToDisplay=this.employees[this.displayNumber]
      this.displayNumber++;
    }   
  }
  HandleNotify(employee:Employee){
    this.selectedEmployee=employee;
  }

  MethodForChildComponent()
  {
    this.dispEmp.inc();

  }
  GoToEmployeeDetails(id:number|null)
  {
    this._router.navigate(['employee',id])
  }
}
