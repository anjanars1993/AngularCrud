import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import {Observable} from 'rxjs/internal/Observable';
import { of } from "rxjs";
import { delay } from "rxjs/operators";


@Injectable()
export class EmployeeService{
  employee:Employee=new Employee();
    private employees:Employee[]=[
        {
          id: 1,
          name: 'Mark',
          gender: 'Male',
          contactPreference: 'Email',
          email: 'mark@pragimtech.com',
          dateOfBirth: new Date('10/25/1988'),
          department: '1',
          isActive: true,
          photoPath: 'assets/images/mark.png'
        },
        {
          id: 2,
          name: 'Mary',
          gender: 'Female',
          contactPreference: 'Phone',
          phoneNumber: 2345978640,
          dateOfBirth: new Date('11/20/1979'),
          department: '2',
          isActive: true,
          photoPath: 'assets/images/mary.png'
        },
        {
          id: 3,
          name: 'John',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: '3',
          isActive: false,
          photoPath: 'assets/images/john.png'
        },
      ]
      public getEmployees():Observable<Employee[]>{
        return of(this.employees).pipe(delay(1000));
      } 
      public getEmployeeById(id:number):Employee{
        this.employee=this.employees.find(x=>x.id==id)!;
        return this.employee;
      } 
      public getMaximumId():number|null{
        this.employee=this.employees.reduce((prev,current)=>prev.id!>current.id!?prev:current)        
        return this.employee.id;
      } 
      public saveEmployees(employee:Employee){
        if(employee.id===null)
        {
          employee.id=+this.getMaximumId()!+1
          this.employees.push(employee);
        }
        else
        {  
           const index=this.employees.findIndex(x=>x.id==employee.id);
           this.employees[index]=employee;
        }
      } 
      public deleteEmployee(id:number|null)
      {
        debugger;
        const index=this.employees.findIndex(x=>x.id==id);
        if(index!==-1)
        {
          this.employees.splice(index,1);
        }
      }
}