import { Component } from '@angular/core';
import { Ticket } from '../ticket-object/ticket';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket-object/ticket.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-show-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './ticket-show-details.component.html',
  styleUrl: './ticket-show-details.component.css'
})
export class TicketShowDetailsComponent {
  ticketNumber: number
  ticket!: Ticket
  constructor(private route: ActivatedRoute, private ticketService: TicketService,
    private router: Router) {

    this.ticketNumber=0
  }

  updateTicket(ticketNumber: number){
    this.router.navigate(['update-ticket/', ticketNumber]);
  }

  ngOnInit(): void {
    this.ticketNumber = this.route.snapshot.params['ticketNumber'];

    this.ticket = new Ticket();
    this.ticketService.getTicketByTicketNumber(this.ticketNumber).subscribe( data => {
      this.ticket = data;
    });
  }

}
