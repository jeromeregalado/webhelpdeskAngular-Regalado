import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';

import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeShowDetailsComponent } from './employee/employee-show-details/employee-show-details.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    HomeComponent,
    BrowserAnimationsModule,
    EmployeeShowDetailsComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    TicketListComponent,
    AddTicketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
