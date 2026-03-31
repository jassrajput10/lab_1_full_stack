import { Router } from 'express';
import { EmployeeController } from '../controllers/employeeController';

const router = Router();
const controller = new EmployeeController();

// NOTE: /department/:department must come BEFORE /:id
// otherwise Express matches "department" as the :id param
router.get('/', controller.getAll.bind(controller));
router.get('/department/:department', controller.getByDepartment.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));

export default router;