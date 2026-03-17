import express from "express";
import { getDepartments, createEmployee } from "../controllers/employeeController";

const router = express.Router();

router.get("/departments", getDepartments);
router.post("/employees", createEmployee);

export default router;