import { BriefcaseBusiness, Delete, Plus, Sparkles, Trash } from 'lucide-react'
import React, { useState } from 'react'

const ExperienceForm = ({data,onChange}) => {
  const [experienceCount,setExperienceCount] = useState(0);
  const addExperience = () => {
    const newExperience = {
      company:"",
      position:"",
      start_date:"",
      end_date:"",
      description:"",
      is_current:false
    }
    onChange([...data,newExperience]);
  }
  const removeExperience = (index) =>{
    const updated = data.filter((_,i) => i!=index);
    onChange(updated);
  }
  const updateExperience = (index,field,value) => {
    const updated = [...data];
    updated[index] = {...updated[index],[field]:value};
    onChange(updated)
  }
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center' >
        <div className='flex flex-col'>
          <h2 className='font-semibold text-[18px]'>Professional Experience</h2>
          <p className='text-[15px] text-gray-500'>Add your job experience</p>
        </div>
        <button onClick={addExperience} className='flex gap-1 h-[30px] px-1 items-center border border-transparent text-green-700 bg-green-300 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 active:scale-95 hover:border-green-700'>
          <Plus className='size-5'/><p className='text-sm'>Add Experience</p>
        </button>
      </div>
      {data.length ===0 ? (
        <div className='flex flex-col items-center mt-15 mb-20'>
          <BriefcaseBusiness className='size-10 text-gray-400'/>
          <p className='text-gray-600 text-[17px]'>No work experience added yet.</p>
          <p className='text-gray-400 text-[12px]'>Click "Add Experience" to get started.</p>
        </div>
      ) : (
        <div className='space-y-4 mt-5'>
          {data.map((experience,index) => {
            return (
              <div key={index} className='flex flex-col p-4 border border-gray-400 rounded-lg space-y-3'>
                <div className='flex justify-between'>
                  <p>Experience #{index+1}</p>
                  <button onClick={() => removeExperience(index)} className='cursor-pointer'><Trash className='size-4 text-red-500 hover:text-red-800'/></button>
                </div>
                <div className='flex justify-between'>
                  <input type='text' placeholder='Company Name' className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateExperience(index,"company",e.target.value)} value={experience.company || ""}/>
                  <input type='text' placeholder='Job Title' className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateExperience(index,"position",e.target.value)} value={experience.position || ""}/>
                </div>
                <div className='flex justify-between'>
                  <input type='month'  className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateExperience(index,"start_date",e.target.value)} value={experience.start_date || ""}/>
                  <input type='month' disabled={experience.is_current}  className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300 disabled:bg-gray-200' onChange={(e) => updateExperience(index,"end_date",e.target.value)} value={experience.end_date || ""}/>
                </div>
                <label className='flex items-center gap-1'>
                  <input
                    type="checkbox"
                    checked={experience.is_current || false}
                    onChange={(e) =>
                      updateExperience(
                        index,
                        "is_current",
                        e.target.checked ? true : false
                      )
                    }
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Currently working here</span>
                </label>
                <div className='space-y-5'>
                    <div className='flex items-center justify-between'>
                      <label className='text-gray-500 text-md font-semibold'>Job Description</label>
                      <button className='flex items-center gap-1 px-2 py-2 text-xs bg-purple-100 text-purple-700 rounded disabled:opacity-50 cursor-pointer hover:scale-105 transition-all duration-700 active:scale-95'>
                        <Sparkles className='size-4' />
                        Enhance with AI
                      </button>
                    </div>
                    <div className='mt5'>
                      <textarea value={experience.description || ""} onChange={(e) => updateExperience(index,"description",e.target.value)} rows={6} placeholder='Describe your key responsibilities and achievements.....' className='w-full text-sm px-3 py-2 rounded-lg resize-none border border-gray-300' />
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}

export default ExperienceForm
