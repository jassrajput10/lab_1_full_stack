import { Router } from 'express';
import { DepartmentController } from '../controllers/DepartmentController';

const router = Router();
const controller = new DepartmentController();

router.get('/', controller.getAll.bind(controller));
router.get('/:name', controller.getByName.bind(controller));

export default router;