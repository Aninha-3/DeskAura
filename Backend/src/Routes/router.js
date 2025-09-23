import express from 'express';
import * as userController from '../Controllers/userController.js';

const router = express.Router();

router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

export default router;
