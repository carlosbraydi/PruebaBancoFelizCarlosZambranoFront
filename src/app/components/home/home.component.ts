import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../interfaces/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: IEmployee[];
  columns = ['', '', '', '', '', ''];
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployess();
  }

  getEmployess() {
    this.service.getEmployees().subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }

}
