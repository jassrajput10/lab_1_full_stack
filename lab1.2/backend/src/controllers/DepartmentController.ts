import { Request, Response } from 'express';
import { DepartmentService } from '../services/DepartmentService';
import { ApiResponse } from '../types';

export class DepartmentController {
  private service: DepartmentService;

  constructor() {
    this.service = new DepartmentService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.service.getAll();
    res.status(result.success ? 200 : 400).json(result);
  }

  async getByName(req: Request, res: Response): Promise<void> {
    const nameParam = req.params.name;
    
    if (typeof nameParam !== 'string') {
      res.status(400).json({ success: false, error: 'Invalid department name' });
      return;
    }

    const result = await this.service.getByName(nameParam);
    res.status(result.success ? 200 : 400).json(result);
  }
}