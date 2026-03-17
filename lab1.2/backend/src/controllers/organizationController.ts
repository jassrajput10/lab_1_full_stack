import { Request, Response } from "express";
import { organizationService } from "../services/organizationService";

export const getRoles = (req: Request, res: Response) => {
  res.json(organizationService.getRoles());
};

export const createRole = (req: Request, res: Response) => {

  try {

    const { person, role } = req.body;

    const roles = organizationService.createRole(person, role);

    res.json(roles);

  } catch (err: any) {

    res.status(400).json({ error: err.message });

  }
};