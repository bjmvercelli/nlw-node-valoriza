import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUserSendedComplimentsController } from './controllers/ListUserSendedComplimentsController';
import { isAdmin } from './middlewares/isAdmin';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendedComplimentsController = new ListUserSendedComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();

router.post('/tags', isAuthenticated, isAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authController.handle);
router.post('/compliments', isAuthenticated, createComplimentController.handle);

router.get('/users/compliments/sended', isAuthenticated, listUserSendedComplimentsController.handle);
router.get('/users/compliments/received', isAuthenticated, listUserReceivedComplimentsController.handle);


export { router }