import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
    validate:{
      validator: function(v){
        return validator.isEmail(v);
      },
      message:(props) => `${props.value} is not a valid email`,
    }
  },
  password:{
    type:String,
    required:true,
    minlength:[8,"Password must be minimum 8 characters long"],
    validate:{
      validator: function(v) {
        return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(v);
      },
      message:"Password must contain upperCase,lowerCase,number and special character"
    },
    select:false
  },
  reviews:{
    type:[String],
    default:[]
  }
},{timestamps:true});

userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password,salt);
  next();
});

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password,this.password);
}

const User = mongoose.model("User",userSchema);

export default User;