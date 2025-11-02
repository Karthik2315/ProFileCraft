import mongoose from "mongoose";

const connectDB = async() => {
  try {
    mongoose.connection.on("connected", ()=>{
      console.log("Database got connected");
    });
    let mongoDBURL = process.env.MONGODB_URI;
    const projectName = "profileCraft";
    await mongoose.connect(`${mongoDBURL}/${projectName}`);
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;