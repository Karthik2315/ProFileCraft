import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResumeBuilder = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between px-25'>
      <div className='flex mt-8 gap-2 group cursor-pointer' onClick={()=>navigate('/app')}>
        <ArrowLeft className='w-4 text-slate-400 group-hover:text-gray-600' />
        <p className='text-slate-400 group-hover:text-gray-600 cursor-pointer'>Back to DashBoard</p>
      </div>
      <div>
        <button></button>
      </div>
    </div>
    </div>
  )
}

export default ResumeBuilder
