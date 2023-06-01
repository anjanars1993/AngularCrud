import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../models/employee.model";

@Pipe({
    name:'employeeFilter'
})
export class SearchFilterPipe implements PipeTransform{
    transform(employees:Employee[],searchTerm:string):Employee[] {
        if(!employees || !searchTerm)
        {
            return employees;
        }
        else{
            return employees.filter(e=>
                e.name?.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
        }
    }
}