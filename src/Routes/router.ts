// router.ts
import { Router, Request, Response } from 'express';

//controllers
import CreateUserCOntroller from '../Controller/user/createUserController';

const router = Router();

router.get('/', new CreateUserCOntroller().handle);

export default router;
