import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { AssignTicketDTO } from './assign-ticket-dto';
import { AddWatcherDTO } from './add-watcher-dto';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseURL = "http://localhost:8081/tickets";

  constructor(private httpClient: HttpClient) { }

  getTicketList(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseURL}/viewAll`);
  }

  addTicket(ticket: Ticket): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, ticket);
  }

  getTicketByTicketNumber(ticketNumber: number): Observable<Ticket>{
    return this.httpClient.get<Ticket>(`${this.baseURL}/view/${ticketNumber}`);
  }



  // updateEmployee(employeeNumber: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/update/${employeeNumber}`, employee);
  // }

  deleteTicket(ticketNumber: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${ticketNumber}`);
  }

  updateTicket(ticket: Ticket): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update`, ticket);
  }

  assignTicket(assignTicketDTO: AssignTicketDTO): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/assign`, assignTicketDTO, {responseType: 'text'});
  }

  addWatcher(addWatcherDTO: AddWatcherDTO){
    return this.httpClient.post(`${this.baseURL}/watchers/addWatcher`, addWatcherDTO, {responseType: 'text'});
  }
}
