import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../ticket/ticket-object/ticket.service';
import { Ticket } from '../ticket-object/ticket';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AssignTicketDTO } from '../ticket-object/assign-ticket-dto';

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


  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) {
      this.ticketNumber=0
      this.employeeNumber=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.ticketNumber = this.route.snapshot.params['ticketNumber'];
    this.assignTicketDTO.ticketNumber = this.ticketNumber
    this.ticketService.getTicketByTicketNumber(this.ticketNumber).subscribe(data => {
      this.ticket = data;
    }, error => console.log(error));


  }

  onSubmit(){
    this.ticketService.assignTicket(this.assignTicketDTO).subscribe( data =>{
      console.log(data);
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
