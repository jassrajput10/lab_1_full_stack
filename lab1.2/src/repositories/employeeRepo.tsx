import type { Department, Employee } from '../data';  // Type-only import for types
import { initialDepartments } from '../data';          // Regular import for data

let departmentsData: Department[] = [...initialDepartments];

export const employeeRepo = {
  getDepartments: (): Department[] => {
    return departmentsData;
  },

  getEmployees: (): Department[] => {
    return departmentsData;
  },

  addEmployee: (departmentName: string, employee: Employee): Department[] => {
    departmentsData = departmentsData.map(dept =>
      dept.name === departmentName
        ? { ...dept, employees: [...dept.employees, employee] }
        : dept
    );
    return departmentsData;
  },

  departmentExists: (departmentName: string): boolean => {
    return departmentsData.some(dept => dept.name === departmentName);
  }
};