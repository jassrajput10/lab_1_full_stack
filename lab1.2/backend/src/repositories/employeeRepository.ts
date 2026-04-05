import prisma from '../lib/prisma';

export class EmployeeRepository {

  async getAll() {
    return prisma.employee.findMany({
      include: { department: true }
    });
  }

  async getById(id: number) {
    return prisma.employee.findUnique({
      where: { id },
      include: { department: true }
    });
  }

  async getByDepartment(departmentName: string) {
    return prisma.employee.findMany({
      where: { department: { name: departmentName } },
      include: { department: true }
    });
  }

  async addEmployee(departmentName: string, employee: { firstName: string; lastName?: string }) {
    const dept = await prisma.department.findUnique({ where: { name: departmentName } });
    if (!dept) return null;

    return prisma.employee.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        departmentId: dept.id
      },
      include: { department: true }
    });
  }
}