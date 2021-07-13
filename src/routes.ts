import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { isAdmin } from './middlewares/isAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/tags', isAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authController.handle);
router.post('/compliments', createComplimentController.handle);

export { router }