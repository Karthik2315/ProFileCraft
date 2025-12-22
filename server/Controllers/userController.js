import Resume from "../models/resumeModel.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const generateJWT = (userId) => {
  const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'3d'})
  return token;
}


export const register = async(req,res) => {
  try {
    const {password,email,name} = req.body;
    if(!name || !password || !email)
    {
      return res.status(400).json({
        success:false,
        message:"Missing required fields"
      });
    }
    const user = await User.findOne({email});
    if(user)
    {
      return res.status(400).json({
        success:false,
        message:"User already Exists"
      })
    }
    const newUser = await User.create({
      name,email,password
    })

    const token = generateJWT(newUser._id);
    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"Lax",
      maxAge:3*24*60*60*1000
    })
    return res.status(200).json({
      success:true,
      message:"User Created Successfully",
      user:newUser
    })
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      // Extract the first validation message
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ success:false, message: messages[0] }); 
    }
    res.status(500).json({
      success:false,
      message:"Server Error"
    })
  }
}

export const login = async(req,res) => {
  try {
    const {password,email} = req.body;
    if(!password || !email)
    {
      return res.status(400).json({
        success:false,
        message:"Missing required fields"
      })
    }
    const user = await User.findOne({email});
    if(!user)
    {
      return res.status(400).json({
        success:false,
        message:"User doesn't exist"
      })
    }
    if(!user.comparePassword(password))
    {
      return res.status(400).json({
        success:false,
        message:"Invalid password"
      });
    }
    const token = generateJWT(user._id);
    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"Lax",
      maxAge:3*24*60*60*1000
    })
    return res.status(200).json({
      success:true,
      message:"User Login Successfully",
      user
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success:false,
      message:"Server Error"
    })
  }
}

export const getUserById = async(req,res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if(!user)
    {
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }
    return res.status(200).json({
      success:false,
      user
    })
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success:false,
      message:"Server Error"
    })
  }
}

export const getUserResumes = async(req,res) => {
  try {
    const userId = req.userId;
    const resumes = await Resume.find({userId});
    return res.status(200).json({
      success:true,
      resumes
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}