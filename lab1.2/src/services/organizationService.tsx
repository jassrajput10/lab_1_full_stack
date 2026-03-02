import type { Role } from '../data';
import { organizationRepo } from '../repositories/organizationRepo';

export const organizationService = {
  createRole: (person: string, role: string): { success: boolean; error?: string; roles?: Role[] } => {
    // Validate first name has at least 3 characters
    const firstName = person.trim().split(' ')[0];
    if (!firstName || firstName.length < 3) {
      return { success: false, error: 'First Name must be at least 3 characters' };
    }

    // Validate role is not already occupied
    if (organizationRepo.roleExists(role) && organizationRepo.roleIsOccupied(role)) {
      return { success: false, error: 'This role is already occupied' };
    }

    // Add role via repository
    const newRole: Role = { person, role };
    const updatedRoles = organizationRepo.addRole(newRole);
    return { success: true, roles: updatedRoles };
  },

  getRoles: () => {
    return organizationRepo.getRoles();
  },

  setRoles: (roles: Role[]) => {
    organizationRepo.setRoles(roles);
  }
};