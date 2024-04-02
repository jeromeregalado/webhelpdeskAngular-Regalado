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
import { ViewAssignedTicketsComponent } from './employee/view-assigned-tickets/view-assigned-tickets.component';
import { LoginComponent } from './login/login.component';
import { AssignTicketComponent } from './ticket/assign-ticket/assign-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: CreateEmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path:'updating-by-employeeNumber/:employeeNumber',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:employeeNumber',component:EmployeeShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'add-ticket', component:AddTicketComponent},
  {path:'show-all-tickets', component: TicketListComponent},
  {path:'details-of-ticket/:ticketNumber',component:TicketShowDetailsComponent},
  {path: 'view-assigned-tickets/:employeeNumber', component:ViewAssignedTicketsComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'assign-ticket/:ticketNumber', component: AssignTicketComponent},
  {path: 'update-ticket/:ticketNumber', component: UpdateTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
