import { Request, Response } from 'express';
import { EmployeeService } from '../services/employeeService';

export class EmployeeController {
  private service: EmployeeService;

  constructor() {
    this.service = new EmployeeService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.service.getAll();
    res.status(result.success ? 200 : 400).json(result);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id = req.params['id'] as string;
    if (!id) {
      res.status(400).json({ success: false, error: 'Invalid employee ID' });
      return;
    }
    const result = await this.service.getById(id);
    res.status(result.success ? 200 : 404).json(result);
  }

  async getByDepartment(req: Request, res: Response): Promise<void> {
    const department = req.params['department'] as string;
    if (!department) {
      res.status(400).json({ success: false, error: 'Invalid department name' });
      return;
    }
    const result = await this.service.getByDepartment(department);
    res.status(result.success ? 200 : 400).json(result);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { departmentName, employee } = req.body;

    if (!departmentName || typeof departmentName !== 'string') {
      res.status(400).json({ success: false, error: 'departmentName is required' });
      return;
    }
    if (!employee || typeof employee.firstName !== 'string' || employee.firstName.length < 3) {
      res.status(400).json({ success: false, error: 'employee.firstName must be at least 3 characters' });
      return;
    }

    const result = await this.service.create(departmentName, employee);
    res.status(result.success ? 201 : 400).json(result);
  }
}