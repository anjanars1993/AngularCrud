import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  employee:Employee=new Employee();
  id:number=0;
  name:string="";
constructor(private _employeeService:EmployeeService,private _activatedRoute:ActivatedRoute,
  private _router:Router){
    
}
ngOnInit() {
  this._activatedRoute.params.subscribe(val => {
    this.id = Number(val['id']);
    this.name=val['name'];
    this.employee = this._employeeService.getEmployeeById(this.id);
  });
}
  
  NextEmployee()
  {
    if (this.id < 3) {
      this.id = this.id + 1;
    } else {
      this.id = 1;
    }

    this._router.navigate(['/employee', this.id,this.name],
    {queryParamsHandling:'preserve'}
    );
    
  }

}
