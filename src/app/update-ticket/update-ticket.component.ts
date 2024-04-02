import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../ticket/ticket-object/ticket.service';
import { Ticket } from '../ticket/ticket-object/ticket';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-ticket.component.html',
  styleUrl: './update-ticket.component.css'
})
export class UpdateTicketComponent {
  ticketNumber: number;
  ticket: Ticket = new Ticket();


  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) {
      this.ticketNumber=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.ticketNumber = this.route.snapshot.params['ticketNumber'];

    this.ticketService.getTicketByTicketNumber(this.ticketNumber).subscribe(data => {
      this.ticket = data;
    }, error => console.log(error));


  }

  onSubmit(){
    this.ticketService.updateTicket(this.ticket).subscribe( data =>{
      this.goToTicketList();
    }
    , error => console.log(error));
  }

  goToTicketList(){
    this.router.navigate(['/show-all-tickets']);
  }
}
