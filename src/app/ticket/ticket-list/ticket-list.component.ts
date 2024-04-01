import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket-object/ticket';
import { TicketService } from '../ticket-object/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [NgbModule,CommonModule,FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets: Ticket[];
  EnteredTicketNumber!:number;

  constructor(private ticketService: TicketService,  private router: Router) {
    this.tickets=[];

   }

  ngOnInit(): void {

    this.getTickets();
  }

  goToTicket(){
    console.log(this.EnteredTicketNumber);
    this.router.navigate(['details-of-ticket',this.EnteredTicketNumber]);
  }

  getTickets(){
    this.ticketService.getTicketList().subscribe(data => {this.tickets = data;});
  }

  updateTicket(id: number){
    this.router.navigate(['updating-by-ticketNumber/', id]);
  }

  deleteTicket(ticketNumber: number){
    if(confirm("Are you sure to delete Ticket Number: " + ticketNumber)){
    this.ticketService.deleteTicket(ticketNumber).subscribe( data => {
      console.log(data);
      this.getTickets();
    })
    window.location.reload();
  }
  }

  detailsOfTicket(ticketNumber: number){
    this.router.navigate(['details-of-ticket/', ticketNumber]);
  }

}
