import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }
  employees: Employee[] = [];  

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        //console.log(employees); 
        this.employees = employees;
      },
      error: (response) => {
        console.log(response); 
      }
    })
  }
}
