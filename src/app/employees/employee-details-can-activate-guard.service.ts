import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeDetailsCanActivateGuard implements CanActivate{
    employee:Employee;
    id:number;
    constructor(private _router:Router,private _employeeService: EmployeeService)
    {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean
    {
       
        debugger;
        this.employee=this._employeeService.getEmployeeById(
            Number(route.paramMap.get('id')));
        if(this.employee!=null)
        {
            return true;
        }           
        else
        {
            this._router.navigate(['notfound']);
            return false;
        }

    }
}
    

