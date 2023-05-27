import { Component , ChangeDetectionStrategy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
import { Employee } from '../models/employee.model';
import {EmployeeService} from '../employees/employee.service'
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
employee:Employee;
  bsdateconfig:Partial<BsDatepickerConfig>
departments:Department[]=[
  {id:1,name:"Help Desk"},
  {id:2,name:"Service"},
  {id:3,name:"Sales"},
  {id:4,name:"Marketing"},
]
password:string="";
confirmPassword:string="";
// fullName:string="";
//   email:string="";
//   gender:string="female";
//   phoneNumber:string="";
//   contactPreference:string="";
//   isActive:boolean=false;
//   department:string="3";
//   dateOfBirth?:Date;
//   photoPath:string="";
showImage:boolean=false;
constructor(private _employeeService:EmployeeService,private _router:Router){
  this.bsdateconfig=Object.assign({},
    {
      containerClass:'theme-dark-blue',
      minDate:new Date('2023,02,01'),
      maxDate:new Date('2023,05,01'),
      dateInputFormat:'DD/MM/YYYY'
  });
  this.employee={
    id:null,
    name:null,
    gender:null,
    email:null,
    phoneNumber: null,
    contactPreference:null,
    dateOfBirth:null,
    department:null,
    isActive:null,
    photoPath: null,
  }

}
  // saveEmployee(empForm:NgForm):void{
  //   console.log(empForm);
  //   console.log(empForm.value);
  // }
  saveEmployee():void{
      console.log(this.employee);
      this._employeeService.saveEmployees(this.employee);
      this._router.navigate(['list']);
    }
  ToggleHideAndShow():void{
this.showImage=!this.showImage;
  }
}
