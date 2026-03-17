import express from "express";
import { getRoles, createRole } from "../controllers/organizationController";

const router = express.Router();

router.get("/roles", getRoles);
router.post("/roles", createRole);

export default router;