import type { Employee } from '../data';  // Type-only import for types
import { employeeRepo } from '../repositories/employeeRepo';

export const employeeService = {
  createEmployee: (departmentName: string, employee: Employee): { success: boolean; error?: string; departments?: any[] } => {
    // Validate department exists
    if (!employeeRepo.departmentExists(departmentName)) {
      return { success: false, error: 'Department does not exist' };
    }

    // Validate first name has at least 3 characters
    if (!employee.firstName || employee.firstName.length < 3) {
      return { success: false, error: 'First Name must be at least 3 characters' };
    }

    // Add employee via repository
    const updatedDepartments = employeeRepo.addEmployee(departmentName, employee);
    return { success: true, departments: updatedDepartments };
  },

  getDepartments: () => {
    return employeeRepo.getDepartments();
  }
};