import { Role, initialRoles } from "../../../backend/data/data";

let rolesData: Role[] = [...initialRoles];

export const organizationRepository = {

  getRoles(): Role[] {
    return rolesData;
  },

  addRole(role: Role): Role[] {
    rolesData = [...rolesData, role];
    return rolesData;
  },

  roleExists(roleName: string): boolean {
    return rolesData.some(r => r.role === roleName);
  },

  roleIsOccupied(roleName: string): boolean {
    const role = rolesData.find(r => r.role === roleName);
    return role ? role.person !== "Vacant" : false;
  }
};