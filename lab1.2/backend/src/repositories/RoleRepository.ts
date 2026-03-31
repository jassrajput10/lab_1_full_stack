import { Role } from '../types';
import { roles } from '../data/role.';

export class RoleRepository {
  private roles: Role[] = roles;

  async getAll(): Promise<Role[]> {
    return this.roles;
  }

  async getByPerson(person: string): Promise<Role | undefined> {
    return this.roles.find(role => role.person === person);
  }

  async addRole(person: string, role: string): Promise<Role> {
    const newRole: Role = { person, role };
    this.roles.push(newRole);
    return newRole;
  }
}