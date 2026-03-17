import { organizationRepository } from "../repositories/organizationRepository";
import { Role } from "../../../backend/data/data";

export const organizationService = {

  getRoles() {
    return organizationRepository.getRoles();
  },

  createRole(person: string, role: string) {

    const firstName = person.trim().split(' ')[0] || "";

    if (firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    if (organizationRepository.roleExists(role) &&
        organizationRepository.roleIsOccupied(role)) {
      throw new Error("Role already occupied");
    }

    const newRole: Role = { person, role };

    return organizationRepository.addRole(newRole);
  }
};