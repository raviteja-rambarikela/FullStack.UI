import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../Services/employees.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''  
  }
  constructor(private employeeService: EmployeesService,private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        console.log(employee);
        this.router.navigate(["employee"]) 
        //this.employee = employee;
      },
      error: (response) => {
        console.log(response); 
      }
    })
  }


}
