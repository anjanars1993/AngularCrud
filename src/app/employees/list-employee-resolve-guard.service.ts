import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/internal/Observable";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";
import { ResolvedEmployeeList } from "../models/resolvedEmployeeList.model";
import { catchError, map } from "rxjs";
import { of } from "rxjs";

@Injectable()
// export class ListEmployeesResolveGuard implements Resolve<Employee[]>{
//     constructor(private _employeeService:EmployeeService){

//     }
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]>
    // {
    //     return this._employeeService.getEmployees();
    // }
//}
// export class ListEmployeesResolveGuard implements Resolve<ResolvedEmployeeList>{
//     constructor(private _employeeService:EmployeeService){
//     }
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList>
//     {
//         return this._employeeService.getEmployees().pipe(map((employeelist)=>new ResolvedEmployeeList(employeelist,null)),
//         catchError((err)=>of((new ResolvedEmployeeList(null,err)))))
//     }

// }
export class ListEmployeesResolveGuard implements Resolve<Employee[]|string>{
    constructor(private _employeeService:EmployeeService){
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]|string>
    {
        return this._employeeService.getEmployees().pipe(
            
        catchError((err:string)=>of(err)))
    }

}