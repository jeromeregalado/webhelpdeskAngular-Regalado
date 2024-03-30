import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
	imports: []
})
export class HomeComponent {

  constructor(private router: Router) {

    }

  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
  }

}
