import prisma from '../lib/prisma';

export class RoleRepository {

  async getAll() {
    return prisma.role.findMany({
      include: { employee: true }
    });
  }

  async getByPerson(person: string) {
    const [firstName, ...rest] = person.split(' ');
    const lastName = rest.join(' ');
    return prisma.role.findFirst({
      where: {
        employee: { firstName, lastName }
      },
      include: { employee: true }
    });
  }

  async addRole(person: string, title: string) {
    const [firstName, ...rest] = person.split(' ');
    const lastName = rest.join(' ');
    const employee = await prisma.employee.findFirst({
      where: { firstName, lastName }
    });
    if (!employee) return null;
    return prisma.role.create({
      data: { title, employeeId: employee.id },
      include: { employee: true }
    });
  }
}