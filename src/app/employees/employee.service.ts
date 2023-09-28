import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import {Observable} from 'rxjs/internal/Observable';
import { of } from "rxjs";
import { catchError, delay, max } from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { throwError } from 'rxjs';


@Injectable()
export class EmployeeService{
  constructor(private _http:HttpClient){

  }
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
        //return of(this.employees).pipe(delay(1000));
        return this._http.get<Employee[]>("https://ars-portal.azurewebsites.net/api/EmployeesPrimaryData")
        .pipe(catchError(this.HandlError),delay(1000));
      } 
      private HandlError(err:HttpErrorResponse)
      {
        if(err.error instanceof ErrorEvent)
        {
          console.log("clent side error: " + err.error.message)
        }
        else
        {
          console.log("server side error: " + err.error.message)
        }
        return throwError(() => new Error('There is a problem in the service. We are noticed and working on resolving it asap.'))
        

      }
      public getEmployeeById(id:number):Observable<Employee>{
        return this._http.get<Employee>("https://ars-portal.azurewebsites.net/api/EmployeesPrimaryData/"+id)
        .pipe(catchError(this.HandlError));
        // this.employee=this.employees.find(x=>x.id==id)!;
        // return this.employee;
      } 

      //not in use
      public getMaximumId():number|null{
       
        this.employee=this.employees.reduce((prev,current)=>prev.id!>current.id!?prev:current)        
        return this.employee.id;
      } 

      public saveEmployees(employee:Employee):Observable<Employee>|undefined{
        // if(employee.id===null)
        // {
          // employee.id=+this.getMaximumId()!+1
          // this.employees.push(employee);
          
          return this._http.post<Employee>("https://ars-portal.azurewebsites.net/api/EmployeesPrimaryData",employee)
          .pipe(catchError(this.HandlError))
        //}
        // else
        // {  
        //    const index=this.employees.findIndex(x=>x.id==employee.id);
        //    this.employees[index]=employee;
        // }
      } 
      public updateEmployees(employee:Employee):Observable<void>{
        // if(employee.id===null)
        // {
          // employee.id=+this.getMaximumId()!+1
          // this.employees.push(employee);
          
          return this._http.put<void>("https://ars-portal.azurewebsites.net/api/EmployeesPrimaryData/"+employee.id,employee)
          .pipe(catchError(this.HandlError))
        //}
        // else
        // {  
        //    const index=this.employees.findIndex(x=>x.id==employee.id);
        //    this.employees[index]=employee;
        // }
      } 
      public deleteEmployee(id:number|null):Observable<void>
      {
        return this._http.delete<void>("https://ars-portal.azurewebsites.net/api/EmployeesPrimaryData/"+id)
        .pipe(catchError(this.HandlError));
        // const index=this.employees.findIndex(x=>x.id==id);
        // if(index!==-1)
        // {
        //   this.employees.splice(index,1);
        // }
      }
}