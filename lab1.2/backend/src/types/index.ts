export interface Employee {
  id: string;
  firstName: string;
  lastName?: string;
  fullName: string;
  department?: string;
}

export interface Department {
  name: string;
  employees: {
    firstName: string;
    lastName?: string;
  }[];
}

export interface Role {
  person: string;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}