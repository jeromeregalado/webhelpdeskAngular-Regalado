import { EmployeeService } from './../../employee/employee-object/employee.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../ticket/ticket-object/ticket.service';
import { Ticket } from '../ticket-object/ticket';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AssignTicketDTO } from '../ticket-object/assign-ticket-dto';
import { Employee } from '../../employee/employee-object/employee';

@Component({
  selector: 'app-assign-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assign-ticket.component.html',
  styleUrl: './assign-ticket.component.css'
})
export class AssignTicketComponent {
  ticketNumber: number;
  ticket: Ticket = new Ticket();
  assignTicketDTO: AssignTicketDTO = new AssignTicketDTO();
  employeeNumber: number;
  employees: Employee[];


  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
  private employeeService: EmployeeService) {
      this.ticketNumber=0
      this.employees=[];
      this.employeeNumber=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.ticketNumber = this.route.snapshot.params['ticketNumber'];
    this.assignTicketDTO.ticketNumber = this.ticketNumber
    this.ticketService.getTicketByTicketNumber(this.ticketNumber).subscribe(data => {
      this.ticket = data;
    }, error => console.log(error));
    this.getEmployees();

  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {this.employees = data;});
  }

  onSubmit(){
    this.ticketService.assignTicket(this.assignTicketDTO).subscribe( data =>{
      console.log(data.toString());
      confirm(data.toString())
      this.goToEmployeeList();
    }

    , error => console.log(error));
  }

  goToTicketList(){
    this.router.navigate(['/show-all-tickets']);
  }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }
}
