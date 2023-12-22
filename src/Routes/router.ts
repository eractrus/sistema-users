// router.ts
import { Router, Request, Response } from 'express';

//controllers
import CreateUserCOntroller from '../Controller/user/createUserController';
import AlterUserController from '../Controller/user/alterUserController';
import AuthUserController from '../Controller/user/authUserController';

const router = Router();

router.post('/user', new CreateUserCOntroller().handle);
router.put('/user', new AlterUserController().handle);
router.post('/session', new AuthUserController().handle);

export default router;
