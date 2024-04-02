import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket-object/ticket';
import { TicketService } from '../ticket-object/ticket.service';
import { CommonModule } from '@angular/common';
import { AddWatcherDTO } from '../ticket-object/add-watcher-dto';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-watcher',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-watcher.component.html',
  styleUrl: './add-watcher.component.css'
})
export class AddWatcherComponent {
  ticketNumber: number;
  ticket: Ticket = new Ticket();
  addWatcherDTO: AddWatcherDTO = new AddWatcherDTO();
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
    this.addWatcherDTO.ticketNumber = this.ticketNumber
    this.ticketService.getTicketByTicketNumber(this.ticketNumber).subscribe(data => {
      this.ticket = data;
    }, error => console.log(error));


  }

  onSubmit(){
    this.ticketService.addWatcher(this.addWatcherDTO).subscribe( data =>{
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
