import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formGroup: FormGroup;
  data: IEmployee[];

  constructor(private service: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.getEmployess();
  }

  getEmployess() {
    this.service.getEmployees().subscribe(res => {
      this.data = res;
    });
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      fullName: ['', {validators: Validators.required}],
      function: ['', {validators: Validators.required}],
      boss: ['', ]
    });
  }

  agregar() {
    const cBoss = this.formGroup.controls.boss.value[0] != undefined ? this.formGroup.controls.boss.value[0] : null;
    const employee: IEmployee = {
      idEmployee: null,
      fullName: this.formGroup.controls.fullName.value,
      function: this.formGroup.controls.function.value,
      boss: cBoss,
      employees: null
    };
    this.service.postEmployee(employee).subscribe(res => {
      this.formGroup.reset();
    });
  }

}
