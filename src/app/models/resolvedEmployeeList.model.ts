import { Employee } from "./employee.model";

export class ResolvedEmployeeList{
    _list:Employee[]|null;
    _error:any;
    constructor(list:Employee[]|null,error:any){
        this._list=list
        this._error=error
    }
}