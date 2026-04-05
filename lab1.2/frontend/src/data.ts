export interface Employee {
  id?: number;
  firstName: string;
  lastName?: string | null;
  departmentId?: number;
}

export interface Department {
  id?: number;
  name: string;
  employees: Employee[];
}

export interface Role {
  id?: number;
  title: string;
  employeeId?: number;
  employee?: {
    id: number;
    firstName: string;
    lastName?: string | null;
  };
}

// Keep for any legacy references
export const initialRoles: Role[] = [];