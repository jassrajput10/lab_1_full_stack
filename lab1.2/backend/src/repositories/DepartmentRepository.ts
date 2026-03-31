import { Department } from '../types';
import { departments } from '../data/department';

export class DepartmentRepository {
  private departments: Department[] = departments;

  async getAll(): Promise<Department[]> {
    return this.departments;
  }

  async getByName(name: string): Promise<Department | undefined> {
    return this.departments.find(dept => dept.name === name);
  }
}