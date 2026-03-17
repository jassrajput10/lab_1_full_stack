import type { Department, Employee } from '../../../backend/data/data';  
import { initialDepartments } from '../../../backend/data/data';          
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