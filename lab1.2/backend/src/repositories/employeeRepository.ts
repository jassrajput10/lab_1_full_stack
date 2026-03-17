import { Department, Employee, initialDepartments } from "../../../backend/data/data";

let departmentsData: Department[] = [...initialDepartments];

export const employeeRepository = {

  getDepartments(): Department[] {
    return departmentsData;
  },

  addEmployee(departmentName: string, employee: Employee): Department[] {

    departmentsData = departmentsData.map(dept =>
      dept.name === departmentName
        ? { ...dept, employees: [...dept.employees, employee] }
        : dept
    );

    return departmentsData;
  },

  departmentExists(departmentName: string): boolean {
    return departmentsData.some(d => d.name === departmentName);
  }
};