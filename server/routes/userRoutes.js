import express from 'express';
import { getUserById, getUserResumes, login, register } from '../Controllers/userController';
import protect from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/me',protect,getUserById);
userRouter.get('/resumes',protect,getUserResumes);

export default userRouter;