import express from 'express';
import { registerChef, loginChef, logoutChef, isAuthChef } from '../controllers/chefController.js';
import authChef from '../middlewares/authChef.js';

const chefRouter = express.Router();

chefRouter.post('/register', registerChef);
chefRouter.post('/login', loginChef);
chefRouter.get('/is-auth', authChef, isAuthChef);
chefRouter.get('/logout', authChef, logoutChef);

export default chefRouter;
