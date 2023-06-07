import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayEmployeeComponent } from './display-employee.component';
import { ResolvedEmployeeList } from '../models/resolvedEmployeeList.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-test',
  templateUrl: './employee-test.component.html',
  styleUrls: ['./employee-test.component.css']
})
export class EmployeeTestComponent implements OnInit{
  employeeToDisplay:Employee=new Employee();
  displayNumber:number=1;
    //searchTerm:string; 
  selectedEmployee:Employee=new Employee();
  @ViewChild('displayEmployee') dispEmp:DisplayEmployeeComponent;
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
  employees:Employee[]=[];
  error:String;
  constructor(private _router:Router,
    private _activatedRoute:ActivatedRoute){
      //if service is fine // this.employees=this._activatedRoute.snapshot.data['employeeList'];
      
      //if we want to use ResolvedEmployeeList to resolve error
      // const resolvedEmployeeList:ResolvedEmployeeList=this._activatedRoute.snapshot.data['employeeList'];
      // if(resolvedEmployeeList._list!=null)
      // {
      //   this.employees=resolvedEmployeeList._list;
      // }
      // else
      // {
      //   this.error=resolvedEmployeeList._error;
      // }

      //if we want to use Employee[]|string to resolve error
      if(this._activatedRoute.snapshot.data['employeeList'] instanceof Array)
      {
        this.employees=this._activatedRoute.snapshot.data['employeeList'];
      }
      else
      {
        this.error=this._activatedRoute.snapshot.data['employeeList'];
      }
      this.employeeToDisplay=this.employees[0];  
      if(this._activatedRoute.snapshot.queryParamMap.has('searchTerm'))
      {
        this.searchTerm=this._activatedRoute.snapshot.queryParamMap.get('searchTerm')!;
      }
      else
      {
        this.fiteredEmployees=this.employees;
       
      }
    }
  
  ngOnInit(): void {
    }
    MethodForChildComponent()
    {
      this.dispEmp.inc();
  
    }
    HandleNotify(employee:Employee){
      debugger;
      this.selectedEmployee=employee;
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
    HandleDeleteNotify(id:number|null)
    {
      const index=this.fiteredEmployees.findIndex(x=>x.id==id);
        if(index!==-1)
        {
          this.fiteredEmployees.splice(index,1);
        }
    }
  }
