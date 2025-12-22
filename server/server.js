import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/mongoDB.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin:["http://localhost:5173"], credentials:true }));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req,res) => res.send('server is live'));

app.get('/api/protected', (req,res) => {
  try {
    const token = req.cookies.token;
    if(!token) throw new Error("No token");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ success:true, message:"Authorized", user: decoded });
  } catch(err) {
    console.log(err)
    res.status(401).json({ success:false, message:"Unauthorized" });
  }
});

app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/ai', aiRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch(err) {
    console.error("DB connection failed", err);
  }
};

startServer();
