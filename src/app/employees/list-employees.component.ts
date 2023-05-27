import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  employeeToDisplay:Employee=new Employee();
  employees:Employee[]=[];
  displayNumber:number=1;
constructor(private _employeeService:EmployeeService){}
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
}
