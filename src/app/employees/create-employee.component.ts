import { Component , ChangeDetectionStrategy, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
import { Employee } from '../models/employee.model';
import {EmployeeService} from '../employees/employee.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  panelTitle:string;
  @ViewChild('employeeForm') empForm:NgForm;
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
constructor(private _employeeService:EmployeeService,private _router:Router,
  private _activatedRoute:ActivatedRoute){
  this.bsdateconfig=Object.assign({},
    {
      containerClass:'theme-dark-blue',
      minDate:new Date('1960,02,01'),
      maxDate:new Date('2003,01,01'),
      dateInputFormat:'YYYY-MM-DD',
      //useUtc:true,
      withTimepicker: false

  });
 

}
  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(params=>{
      if(params['id']!=0)
      {
        this.panelTitle="Edit Employee"
        // this.employee=Object.assign({},this._employeeService.getEmployeeById(params['id']));
        this._employeeService.getEmployeeById(params['id']).subscribe({
          next: (emp) => { 
            this.employee=Object.assign({},emp);
            
          },
          error: (e) => console.log(e),
          complete: () => console.info('complete') 
          })
      }
      else
      {
        this.panelTitle="Create Employee"
        this.employee={
          id:0,
          name:null,
          gender:null,
          email:null,
          phoneNumber: null,
          contactPreference:null,
          dateOfBirth:null,
          department:'select',
          isActive:null,
          photoPath: null,
        }
        this.empForm?.reset();
      }
    })
  }
  // saveEmployee(empForm:NgForm):void{
  //   console.log(empForm);
  //   console.log(empForm.value);
  // }
showLoader:boolean=false;
  saveEmployee():void{
    
      // const newEmployee:Employee=Object.assign({},this.employee);
      // this._employeeService.saveEmployees(newEmployee);
      // this.empForm.reset();
      // this._router.navigate(['list']);
      if(this.employee.id==0)
      {
        this._employeeService.getEmployees().subscribe(data => {
          const maxId=Math.max.apply(Math,data.map(obj => obj.id)); 
          const newEmployee:Employee=this.employee;
          newEmployee.id=maxId+1;
        this._employeeService.saveEmployees(newEmployee)?.subscribe(
          (emp)=>{
           console.log(emp);
            this.empForm.reset();
            this._router.navigate(['list']);
          }
        )
        })
      }
     else
     {
      const newEmployee:Employee=this.employee;
      this._employeeService.updateEmployees(newEmployee).subscribe({
        
      next: () => { 
        this.empForm.reset();
        this._router.navigate(['list']);
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete') 
      })
      
     }
    
    }
  ToggleHideAndShow():void{
  this.showImage=!this.showImage;
  }
  ResetForm(empForm:NgForm)
  {
    debugger;
    //empForm.resetForm();
    empForm.resetForm({
      fullName:'Anjana',
      contactPreference:'Phone'
    });
  }
}
