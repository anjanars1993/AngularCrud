import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { DisplayEmployeeComponent } from './display-employee.component';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  //searchTerm:string;
  fiteredEmployees:Employee[]=[];
  private _searchTerm:string;
  get searchTerm():string{
    return this._searchTerm;
  }
  set searchTerm(value:string)
  {
    this._searchTerm=value;
    this.fiteredEmployees=this.FilterEmployees(value);
  }
  //moved the search-filter pipe logic to component
  FilterEmployees(search:string)
  {
    return this.employees.filter(e=>
      e.name?.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())!==-1);
  }
  @ViewChild('displayEmployee') dispEmp:DisplayEmployeeComponent;
  employeeToDisplay:Employee=new Employee();
  employees:Employee[]=[];
  displayNumber:number=1;
  selectedEmployee:Employee=new Employee();
constructor(private _employeeService:EmployeeService,private _router:Router,private _activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(emp=>{
    console.log(emp)
    this.employees=emp;   
    this.employeeToDisplay=this.employees[0];    
    if(this._activatedRoute.snapshot.queryParamMap.has('searchTerm'))
    {
      this.searchTerm=this._activatedRoute.snapshot.queryParamMap.get('searchTerm')!;
    }
    else
    {
      this.fiteredEmployees=this.employees;
      console.log(this.fiteredEmployees)
    }
  })
    
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
  GoToEmployeeDetails(id:number|null,name:string|null)
  {
    this._router.navigate(['employee',id,name],{
      queryParams:{'searchTerm':this.searchTerm,'testParam':'testParam'}
    })
  }
  ChangeEmployeeName()
  {
    this.employees[0].name='Jordan';
    this.fiteredEmployees=this.FilterEmployees(this.searchTerm);
    // const employeeCopy:Employee[]=Object.assign([],this.employees);
    // employeeCopy[0].name='Jordan';
    // this.employees=employeeCopy;
  }
}
