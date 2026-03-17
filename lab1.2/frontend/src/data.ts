export interface Employee {
  firstName: string;
  lastName?: string;
}

export interface Department {
  name: string;
  employees: Employee[];
}

// Add Role interface
export interface Role {
  role: string;
  person: string; // e.g., "Vacant" or employee name
}

// Optional: initial roles
export const initialRoles: Role[] = [
  { role: 'Manager', person: 'Vacant' },
  { role: 'Developer', person: 'Vacant' },
  { role: 'Tester', person: 'Vacant' },
];