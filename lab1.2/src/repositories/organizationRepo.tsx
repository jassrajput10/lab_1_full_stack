import type { Role } from '../data';

let rolesData: Role[] = [];

export const organizationRepo = {
  getRoles: (): Role[] => {
    return rolesData;
  },

  setRoles: (roles: Role[]): void => {
    rolesData = roles;
  },

  addRole: (role: Role): Role[] => {
    rolesData = [...rolesData, role];
    return rolesData;
  },

  roleExists: (roleName: string): boolean => {
    return rolesData.some(r => r.role === roleName);
  },

  roleIsOccupied: (roleName: string): boolean => {
    const role = rolesData.find(r => r.role === roleName);
    return role ? role.person !== "Vacant" : false;
  }
};