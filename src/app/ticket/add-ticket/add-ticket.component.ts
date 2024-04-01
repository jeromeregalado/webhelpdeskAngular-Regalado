import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket-object/ticket.service';
import { Ticket } from '../ticket-object/ticket';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [NgbModule,FormsModule,CommonModule],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {
  constructor(
    private ticketService: TicketService,
    private router: Router) {

  }

  submitform!: NgForm;
  private baseURL = "http://localhost:8081/tickets";
  ticket: Ticket = new Ticket();

  saveTicket() {
    this.ticketService.addTicket(this.ticket).subscribe(data => {
      console.log(data);
      this.goToTicketList();
    },
      error => console.log(error));
  }

  goToTicketList() {
    this.router.navigate(['/show-all-tickets']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.ticket);
    this.saveTicket();
  }
}
