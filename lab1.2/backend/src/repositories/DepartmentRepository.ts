import prisma from '../lib/prisma';

export class DepartmentRepository {

  async getAll() {
    return prisma.department.findMany({
      include: { employees: true }
    });
  }

  async getByName(name: string) {
    return prisma.department.findUnique({
      where: { name },
      include: { employees: true }
    });
  }
}