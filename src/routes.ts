import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';
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
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.get('/users', isAuthenticated, listUsersController.handle);

router.post('/login', authController.handle);

router.post('/compliments', isAuthenticated, createComplimentController.handle);
router.get('/users/compliments/sended', isAuthenticated, listUserSendedComplimentsController.handle);
router.get('/users/compliments/received', isAuthenticated, listUserReceivedComplimentsController.handle);

router.post('/tags', isAuthenticated, isAdmin, createTagController.handle);
router.get('/tags', isAuthenticated, listTagsController.handle);

export { router }