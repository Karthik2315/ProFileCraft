import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/mongoDB.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOrigin = ["http://localhost:5173"]
app.use(cors({
  origin:corsOrigin,
  credentials:true
}))
app.use(cookieParser());
await connectDB();

app.use('/api/users',userRouter);
app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});
