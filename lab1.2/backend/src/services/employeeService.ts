import { Employee, Department, ApiResponse } from '../types';
import { EmployeeRepository } from '../repositories/employeeRepository';

export class EmployeeService {
  private repository: EmployeeRepository;

  constructor() {
    this.repository = new EmployeeRepository();
  }

  async getAll(): Promise<ApiResponse<Employee[]>> {
    try {
      const employees = await this.repository.getAll();
      return { success: true, data: employees as Employee[] };
    } catch (error) {
      return { success: false, error: 'Failed to fetch employees' };
    }
  }

  async getById(id: string): Promise<ApiResponse<Employee>> {
    try {
      const employee = await this.repository.getById(parseInt(id));
      if (!employee) {
        return { success: false, error: 'Employee not found' };
      }
      return { success: true, data: employee as Employee };
    } catch (error) {
      return { success: false, error: 'Failed to fetch employee' };
    }
  }

  async getByDepartment(department: string): Promise<ApiResponse<Employee[]>> {
    try {
      const employees = await this.repository.getByDepartment(department);
      return { success: true, data: employees as Employee[] };
    } catch (error) {
      return { success: false, error: 'Failed to fetch employees by department' };
    }
  }

  async create(departmentName: string, employee: { firstName: string; lastName?: string }): Promise<ApiResponse<Employee>> {
    try {
      const newEmployee = await this.repository.addEmployee(departmentName, employee);
      if (!newEmployee) {
        return { success: false, error: `Department "${departmentName}" not found` };
      }
      return { success: true, data: newEmployee as Employee };
    } catch (error) {
      return { success: false, error: 'Failed to create employee' };
    }
  }
}