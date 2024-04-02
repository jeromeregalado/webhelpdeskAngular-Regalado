import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../employee-object/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../../ticket/ticket-object/ticket';
import { TicketService } from '../../ticket/ticket-object/ticket.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee-object/employee';


@Component({
  selector: 'app-view-assigned-tickets',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './view-assigned-tickets.component.html',
  styleUrl: './view-assigned-tickets.component.css'
})
export class ViewAssignedTicketsComponent {
  employeeNumber: number
  employee!: Employee
  tickets: Ticket[]

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,private ticketService: TicketService) {
    this.employeeNumber = 0;
    this.tickets=[];
   }
   
  ngOnInit(): void {
    this.employeeNumber = this.route.snapshot.params['employeeNumber'];
    this.employee = new Employee();
    this.employeeService.getEmployeeByEmployeeNumber(this.employeeNumber).subscribe( data => {
      this.employee = data;
    });
    this.employeeService.viewAssignedTickets(this.employeeNumber).subscribe(data => {this.tickets = data;})
  }
}
