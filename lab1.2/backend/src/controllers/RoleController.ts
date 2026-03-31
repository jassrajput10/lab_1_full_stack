import { Request, Response } from 'express';
import { RoleService } from '../services/RoleService';

export class RoleController {
  private service: RoleService;

  constructor() {
    this.service = new RoleService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.service.getAll();
    res.status(result.success ? 200 : 400).json(result);
  }

  async getByPerson(req: Request, res: Response): Promise<void> {
    const person = req.params['person'] as string;
    if (!person) {
      res.status(400).json({ success: false, error: 'Invalid person name' });
      return;
    }
    const result = await this.service.getByPerson(person);
    res.status(result.success ? 200 : 404).json(result);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { person, role } = req.body;

    if (!person || typeof person !== 'string' || person.trim().length < 3) {
      res.status(400).json({ success: false, error: 'person must be at least 3 characters' });
      return;
    }
    if (!role || typeof role !== 'string' || role.trim().length === 0) {
      res.status(400).json({ success: false, error: 'role is required' });
      return;
    }

    const result = await this.service.create(person.trim(), role.trim());
    res.status(result.success ? 201 : 400).json(result);
  }
}