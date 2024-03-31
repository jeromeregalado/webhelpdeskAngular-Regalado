import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  private baseURL = "http://localhost:8081/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/viewAll`);
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, employee);
  }

  getEmployeeByEmployeeNumber(employeeNumber: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/view/${employeeNumber}`);
  }


  updateEmployee(employeeNumber: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${employeeNumber}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }


}
