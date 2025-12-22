import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {User} from "lucide-react"
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { login } from '../app/features/authSlice.js';
import {toast} from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const [isLogin,setIsLogin] = useState(true);
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const condition = isLogin ? "login":"register";
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/${condition}`,formData,{withCredentials:true});
      if(res.data.success)
      {
        dispatch(login(res.data))
        toast.success(res.data.message);
      }
      else
      {
        toast.error(res.data.message)
      }
    } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  }
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({...prev,[name]:value}));
  }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <form className="flex flex-col items-center border border-2  border-gray-300 rounded-2xl p-10 gap-3 shadow-md hover:border-2 hover:border-red-500  hover:shadow-lg transition-all duration-300" onSubmit={(e) => handleSubmit(e)}>
        <h1 className='text-4xl font-semibold'>{isLogin? 'Login' : 'Sign Up'}</h1>
        <p className='text-sm font-base text-gray-500'>{isLogin ? 'Please login to continue' : 'Please register to continue'}</p>
        {!isLogin && 
        <div className='flex gap-1 border rounded-2xl p-2 ring-0 hover:ring-2 hover:ring-red-500 hover:border-transparent'>
          <User className='w-4 h-5 text-gray-600 mr-2'/>
          <input type="text" name='name' value={formData.name} className='outline-none placeholder-gray-400 ' required placeholder='Name' onChange={(e) => handleChange(e)}/>
        </div> }
        <div className='flex gap-2 border rounded-2xl p-2 ring-0 hover:ring-2 hover:ring-red-500 hover:border-transparent'>
          <img src={assets.email_icon} />
          <input type="email" name='email' value={formData.email} className='outline-none placeholder-gray-400' required placeholder='Email id' onChange={(e) => handleChange(e)}/>
        </div>
        <div className='flex gap-2 border rounded-2xl p-2 ring-0 hover:ring-2 hover:ring-red-500 hover:border-transparent'>
          <img src={assets.lock_icon} />
          <input type="password" name='password' value={formData.password} className='outline-none placeholder-gray-400' required placeholder='Enter Password' onChange={(e) => handleChange(e)}/>
        </div>
        {isLogin && 
        <div className='flex w-full mt-1'>
          <p className='text-red-500 cursor-pointer ml-1'>Forgot password?</p>
        </div> }
        <button className='mt-2 bg-red-500 py-2 w-full rounded-3xl text-white cursor-pointer hover:scale-105 transition-all duration-500 active:scale-90' type='submit'>{isLogin ? 'Login' : 'Sign Up'}</button>
        <p className='text-gray-500 text-sm'>{isLogin ? 'Don\'t have an account?' : 'Already have an account?'} <span className='text-red-500 cursor-pointer hover:underline transition-all duration-700' onClick={() => setIsLogin(!isLogin)}>click here</span></p>
      </form>
    </div>
  )
}

export default Login
