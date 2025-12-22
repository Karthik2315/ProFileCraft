import express from 'express';
import { getUserById, getUserResumes, login, register } from '../Controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/me',protect,getUserById);
userRouter.get('/resumes',protect,getUserResumes);

export default userRouter;
