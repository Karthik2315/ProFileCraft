import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col min-h-[80vh]'>
      <div className='flex justify-between items-center px-24 py-6'>
        <p className='text-4xl font-semibold cursor-pointer'>resume <span className='inline-block w-3 h-3 bg-red-500 rounded-full cursor-pointer'/></p>
        <div className='flex gap-8 text-1xl ml-18 transition duration-500'>
          <p className='hover:text-red-500 cursor-pointer transition'>Home</p>
          <p className='hover:text-red-500 cursor-pointer transition'>Features</p>
          <p className='hover:text-red-500 cursor-pointer transition'>contact</p>
        </div>
        <div className='flex gap-5 '>
          <button className='bg-red-500 text-white rounded-4xl px-7 py-2 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-500' onClick={() => navigate('/app')}>Get Started</button>
          <button className='border rounded-4xl px-6 py-2 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-500' onClick={()=>{
            setTimeout(() => {
              navigate('/login')
            },700)
          }}>Login</button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center ml-10 mr-10 justify-center text-center relative">
        <div className="ml-[420px] absolute w-[550px] h-[505px] inset-0 bg-red-400 blur-[100px] opacity-30 -z-10"></div>

        <h1 className='text-6xl font-bold max-w-3xl'>
          Land Your dream job with <span className='bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent'>AI-powered</span> resumes.
        </h1>
        <p className='mt-6 text-[19px] max-w-md'>
          Create, edit and download professional resumes with AI-powered assistance
        </p>
        <button className='bg-red-500 text-white px-6 py-2 rounded-4xl hover:scale-105 transition-all duration-500 active:scale-90 mt-5 cursor-pointer' onClick={() => navigate('/app')}>Get Started ➜</button>
      </div>
      

    </div>
  )
}

export default Hero
