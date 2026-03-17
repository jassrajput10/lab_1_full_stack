import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getDepartments = (req: Request, res: Response) => {
  res.json(employeeService.getDepartments());
};

export const createEmployee = (req: Request, res: Response) => {

  try {

    const { departmentName, employee } = req.body;

    const data = employeeService.createEmployee(departmentName, employee);

    res.json(data);

  } catch (err: any) {

    res.status(400).json({ error: err.message });

  }
};