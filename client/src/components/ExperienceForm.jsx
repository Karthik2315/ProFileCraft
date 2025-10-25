import { BriefcaseBusiness, Plus } from 'lucide-react'
import React, { useState } from 'react'

const ExperienceForm = () => {
  const [experienceCount,setExperienceCount] = useState(0);
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center' >
        <div className='flex flex-col'>
          <h2 className='font-semibold text-[18px]'>Professional Experience</h2>
          <p className='text-[15px] text-gray-500'>Add your job experience</p>
        </div>
        <button className='flex gap-1 h-[30px] px-1 items-center border border-transparent text-green-700 bg-green-300 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 active:scale-95 hover:border-green-700' onClick={() => setExperienceCount(prev => prev+1)}>
          <Plus className='size-5'/><p className='text-sm'>Add Experience</p>
        </button>
      </div>
      <div className='flex flex-col items-center mt-15 mb-20'>
        <BriefcaseBusiness className='size-10 text-gray-400'/>
        <p className='text-gray-600 text-[17px]'>No work experience added yet.</p>
        <p className='text-gray-400 text-[12px]'>Click "Add Experience" to get started.</p>
      </div>
    </div>
  )
}

export default ExperienceForm
