import { Component } from '@angular/core';
import { Employee } from '../employee-object/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-object/employee.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-show-details.component.html',
  styleUrl: './employee-show-details.component.css'
})
export class EmployeeShowDetailsComponent {
  employeeNumber: number
  employee!: Employee
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {

    this.employeeNumber=0
  }

  ngOnInit(): void {
    this.employeeNumber = this.route.snapshot.params['employeeNumber'];

    this.employee = new Employee();
    this.employeeService.getEmployeeByEmployeeNumber(this.employeeNumber).subscribe( data => {
      this.employee = data;
    });
  }

}
