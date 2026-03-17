import { employeeRepository } from "../repositories/employeeRepository";
import { Employee } from "../../../backend/data/data";

export const employeeService = {

  getDepartments() {
    return employeeRepository.getDepartments();
  },

  createEmployee(departmentName: string, employee: Employee) {

    if (!employeeRepository.departmentExists(departmentName)) {
      throw new Error("Department does not exist");
    }

    if (!employee.firstName || employee.firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    return employeeRepository.addEmployee(departmentName, employee);
  }
};