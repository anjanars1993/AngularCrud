import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnChanges,OnInit{
  selectedEmployeeId: number|null=0;
  selectedEmployeeName: string|null="";
constructor(private _activatedRoute:ActivatedRoute){
}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      this.selectedEmployeeId=params['id'];
      this.selectedEmployeeName=params['name'];
     
    })
  }
public counter:number=0;
inc(){
  this.counter++;
}
@Output() notify:EventEmitter<Employee>=new EventEmitter<Employee>();
HandleNotify(){
  // this.notify.emit(this.employee.name?this.employee.name:undefined);
  this.notify.emit(this.employee);
}
  
// private _employee:Employee=new Employee();

// @Input() 
// set employee(val:Employee)
// {
//   const prev=this._employee.name?this._employee.name:null;
//   const curr=val.name;
//   console.log(prev)
//   console.log(curr)
//   this._employee=val;
// }
// get employee()
// {
//   return this._employee;
// }

@Input() employee:Employee=new Employee();
ngOnChanges(changes: SimpleChanges): void { 
  const previousValue=<Employee>changes['employee'].previousValue;
  const currentValue=<Employee>changes['employee'].currentValue;
}

}
