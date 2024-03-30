import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-show-details',
  // standalone: true,
  // imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {
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
