import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent):boolean{
        if(component.empForm.dirty)
        return confirm("Are you sure you want to leave this page?");
        else
        return true
    }

}