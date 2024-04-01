import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeShowDetailsComponent } from './employee/employee-show-details/employee-show-details.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketShowDetailsComponent } from './ticket/ticket-show-details/ticket-show-details.component';


const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: CreateEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-employeeNumber/:employeeNumber',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:employeeNumber',component:EmployeeShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'add-ticket', component:AddTicketComponent},
  {path:'show-all-tickets', component: TicketListComponent},
  {path:'details-of-ticket/:ticketNumber',component:TicketShowDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
