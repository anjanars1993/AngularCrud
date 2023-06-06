import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {EmployeeService} from './employees/employee.service';
import {CanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import {ListEmployeesResolveGuard} from './employees/list-employee-resolve-guard.service'
import {EmployeeDetailsCanActivateGuard} from './employees/employee-details-can-activate-guard.service'

import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive'
import {PasswordValidatorDirective} from './shared/password-validator.directive';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import {SearchFilterPipe} from './shared/search-filter.pipe';
import { EmployeeTestComponent } from './employees/employee-test.component';
import { PageNotFoundComponent } from './employees/page-not-found.component';
import { AccordianComponent } from './shared/accordian.component';

const appRoutes:Routes=[
  {path:'list',component:EmployeeTestComponent,
resolve:{'employeeList':ListEmployeesResolveGuard}},
  {path:'edit/:id',component:CreateEmployeeComponent,
    canDeactivate:[CanDeactivateGuardService]},
  {path:'employee/:id/:name',component:EmployeeDetailsComponent,
canActivate:[EmployeeDetailsCanActivateGuard]},
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'notfound',component:PageNotFoundComponent},
] ;

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    PasswordValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    SearchFilterPipe,
    EmployeeTestComponent,
    PageNotFoundComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService,CanDeactivateGuardService,ListEmployeesResolveGuard,
    EmployeeDetailsCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
