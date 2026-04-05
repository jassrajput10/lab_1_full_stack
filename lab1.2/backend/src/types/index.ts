export interface Employee {
  id: number;
  firstName: string;
  lastName?: string | null;
  departmentId: number;
  department?: Department;
}

export interface Department {
  id: number;
  name: string;
  employees?: Employee[];
}

export interface Role {
  id: number;
  title: string;
  employeeId: number;
  employee?: Employee;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}