import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
departments:Department[]=[
  {id:1,name:"Help Desk"},
  {id:2,name:"Service"},
  {id:3,name:"Sales"},
  {id:4,name:"Marketing"},

]

  fullName:string="";
  email:string="";
  gender:string="female";
  phoneNumber:string="";
  contactPreference:string="";
  isActive:boolean=false;
  department:string="3";
  saveEmployee(empForm:NgForm):void{
    console.log(empForm);
    console.log(empForm.value);
  }
}
