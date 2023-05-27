import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {EmployeeService} from './employees/employee.service'

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive'
import {PasswordValidatorDirective} from './shared/password-validator.directive';
import { DisplayEmployeeComponent } from './employees/display-employee.component'

const appRoutes:Routes=[
  {path:'list',component:ListEmployeesComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
] ;

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    PasswordValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
