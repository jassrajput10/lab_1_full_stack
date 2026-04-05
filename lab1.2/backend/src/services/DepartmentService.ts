import { Department, ApiResponse } from '../types';
import { DepartmentRepository } from '../repositories/DepartmentRepository';

export class DepartmentService {
  private repository: DepartmentRepository;

  constructor() {
    this.repository = new DepartmentRepository();
  }

  async getAll(): Promise<ApiResponse<Department[]>> {
    try {
      const departments = await this.repository.getAll();
      return { success: true, data: departments as Department[] };
    } catch (error) {
      return { success: false, error: 'Failed to fetch departments' };
    }
  }

  async getByName(name: string): Promise<ApiResponse<Department>> {
    try {
      const department = await this.repository.getByName(name);
      if (!department) {
        return { success: false, error: 'Department not found' };
      }
      return { success: true, data: department as Department };
    } catch (error) {
      return { success: false, error: 'Failed to fetch department' };
    }
  }
}