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
  columns = ['ID', 'Nombre', 'Function', 'Jefe', 'Empleados', 'Acciones'];
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployess();
  }

  getEmployess() {
    this.service.getEmployees().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  delete(employee: IEmployee) {
    console.log(employee);
    this.service.deleteEmployee(employee.idEmployee).subscribe(res => {
      console.log(res);
      if (res) {
        this.getEmployess();
      } else {
        alert('Este usuario no se puede eliminar porque tiene empleados a cargo!');
      }
    });
  }

  ver(employee: IEmployee) {
    console.log(employee);
    if (employee.employees.length > 0) {
      let empleados: string = '';
      employee.employees.forEach(aEmployee => {
        empleados += '\n' + aEmployee.fullName + ' - ' + aEmployee.function;
      });
      alert('Empleados a cargo: ' + empleados);
    } else {
      alert('No tiene empleados a cargo');
    }
  }

}
