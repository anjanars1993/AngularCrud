import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  fullName:string="";
  email:string="";
  gender:string="female";
  phoneNumber:string="";
  contactPreference:string="";
  isActive:boolean=false;
  department:string="";
  saveEmployee(empForm:NgForm):void{
    console.log(empForm);
    console.log(empForm.value);
  }
}
