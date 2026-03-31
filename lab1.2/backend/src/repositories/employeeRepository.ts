import { Employee, Department } from '../types';
import { employees } from '../data/employees';
import { departments } from '../data/department';

export class EmployeeRepository {
  private employees: Employee[] = employees;
  private departments: Department[] = departments;

  async getAll(): Promise<Employee[]> {
    return this.employees;
  }

  async getById(id: string): Promise<Employee | undefined> {
    return this.employees.find(emp => emp.id === id);
  }

  async getByDepartment(department: string): Promise<Employee[]> {
    return this.employees.filter(emp => emp.department === department);
  }

  async getByName(firstName: string, lastName: string): Promise<Employee | undefined> {
    return this.employees.find(emp =>
      emp.firstName === firstName && emp.lastName === lastName
    );
  }

  async addEmployee(
    departmentName: string,
    employee: { firstName: string; lastName?: string }
  ): Promise<Department[] | null> {
    // Check department exists
    const dept = this.departments.find(d => d.name === departmentName);
    if (!dept) return null;

    // Add to departments list
    dept.employees.push({ firstName: employee.firstName, lastName: employee.lastName ?? '' });

    // Also add to flat employees list with a generated id
    const newId = String(this.employees.length + 1);
    const fullName = employee.lastName
      ? `${employee.firstName} ${employee.lastName}`
      : employee.firstName;
    this.employees.push({
      id: newId,
      firstName: employee.firstName,
      lastName: employee.lastName ?? '',
      fullName,
      department: departmentName,
    });

    return this.departments;
  }
}