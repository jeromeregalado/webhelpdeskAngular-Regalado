import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee-object/employee';
import { EmployeeService } from '../employee-object/employee.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employeeNumber: number;
  employee: Employee = new Employee();


  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
      this.employeeNumber=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.employeeNumber = this.route.snapshot.params['employeeNumber'];

    this.employeeService.getEmployeeByEmployeeNumber(this.employeeNumber).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));


  }

  onSubmit(){
    this.employeeService.updateEmployee(this.employeeNumber, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
  }
}
