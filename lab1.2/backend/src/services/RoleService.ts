import { Role, ApiResponse } from '../types';
import { RoleRepository } from '../repositories/RoleRepository';

export class RoleService {
  private repository: RoleRepository;

  constructor() {
    this.repository = new RoleRepository();
  }

  async getAll(): Promise<ApiResponse<Role[]>> {
    try {
      const roles = await this.repository.getAll();
      return { success: true, data: roles as Role[] };
    } catch (error) {
      return { success: false, error: 'Failed to fetch roles' };
    }
  }

  async getByPerson(person: string): Promise<ApiResponse<Role>> {
    try {
      const role = await this.repository.getByPerson(person);
      if (!role) {
        return { success: false, error: 'Role not found for person' };
      }
      return { success: true, data: role as Role };
    } catch (error) {
      return { success: false, error: 'Failed to fetch role' };
    }
  }

  async create(person: string, role: string): Promise<ApiResponse<Role>> {
    try {
      const newRole = await this.repository.addRole(person, role);
      if (!newRole) {
        return { success: false, error: 'Employee not found' };
      }
      return { success: true, data: newRole as Role };
    } catch (error) {
      return { success: false, error: 'Failed to create role' };
    }
  }
}