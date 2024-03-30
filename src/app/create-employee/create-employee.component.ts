import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';





@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
  ,
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent //implements OnInit//
{

  constructor(
    private employeeService: EmployeeService,
    private router: Router,

  ) {

  }







  submitform!: NgForm;
  private baseURL = "http://localhost:8081/employees";
  employee: Employee = new Employee();





  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.employee);


    this.saveEmployee();
  }


}
