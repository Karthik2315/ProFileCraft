import express from 'express';
import { getUserById, login, register } from '../Controllers/userController';
import protect from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/me',protect,getUserById);

export default userRouter;