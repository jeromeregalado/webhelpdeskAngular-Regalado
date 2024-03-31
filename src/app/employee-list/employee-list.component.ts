import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];
  EnteredEmployeeNumber!:number;

  constructor(private employeeService: EmployeeService,  private router: Router) {
    this.employees=[];

   }

  ngOnInit(): void {

    this.getEmployees();
  }

  goToEmployee(){
    console.log(this.EnteredEmployeeNumber);
    this.router.navigate(['details-of-employee',this.EnteredEmployeeNumber]);
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {this.employees = data;});
  }

  updateEmployee(id: number){
    this.router.navigate(['updating-by-employeeNumber/', id]);
  }

  deleteEmployee(employeeNumber: number){
    if(confirm("Are you sure to delete Employee Number: " + employeeNumber)){
    this.employeeService.deleteEmployee(employeeNumber).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
    window.location.reload();
  }
  }


  detailsOfEmployee(id: number){
    this.router.navigate(['details-of-employee', id]);
  }
}
