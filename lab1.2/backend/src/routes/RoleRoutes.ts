import { Router } from 'express';
import { RoleController } from '../controllers/RoleController';

const router = Router();
const controller = new RoleController();

router.get('/', controller.getAll.bind(controller));
router.get('/:person', controller.getByPerson.bind(controller));
router.post('/', controller.create.bind(controller));

export default router;