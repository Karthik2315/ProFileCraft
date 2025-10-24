import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const user = {name : "Karthik"}
  return (
    <div className='flex justify-between shadow-lg px-8 py-5'>
      <nav>
        <Link to='/' >
        <p className='text-4xl font-semibold cursor-pointer'>resume <span className='inline-block w-3 h-3 bg-red-500 rounded-full cursor-pointer'/></p>
        </Link>
      </nav>
      <div className='flex items-center gap-8 px-10'>
        <p className='text-gray-500 text-[20px]'>Hi, {user?.name}</p>
        <button className='px-8 py-2 bg-red-500 text-white rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar
