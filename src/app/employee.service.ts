import { Employee } from './models/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employees: Employee[] = [
    new Employee(1),
    new Employee(2, 'Alejandro', 'Tech Lead', 30),
    new Employee(3, 'Mario', 'Mid 3 Dev', 28),
    new Employee(4, 'Wilson', 'Mid 2 Dev', 40)
  ]

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: number): Employee {
    return this.employees.find((employee: Employee) => employee.id === id);
  }

}
