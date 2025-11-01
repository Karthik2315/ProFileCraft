import { Cross, Plus, Sparkles, X } from 'lucide-react';
import React, { useState } from 'react'

const SkillsForm = ({data,onChange}) => {
  const [newSkill,setNewSkill] = useState("");
  const addSkill = () => {
    if(newSkill.trim() && !data.includes(newSkill.trim()))
    {
      onChange([...data,newSkill.trim()]);
      setNewSkill("");
    }
  }

  const removeSkill = (index) => {
    onChange(data.filter((_,idx) => idx !== index));
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") 
    {
      e.preventDefault();
      addSkill();
    }
  }
  return (
    <div className='space-y-4'>
      <div className='text-gray-500'>
        <h3 className='font-semibold text-[19px]'>Skills</h3>
        <p className='text-sm'>Add your technical and soft skills</p>
      </div>
      <div className='flex gap-2 w-full items-center justify-between'>
        <input type='text' placeholder='Enter a Skill (eg: JavaScript, Project Management)' className='border border-gray-400 rounded-md w-[85%] py-1 px-1 placeholder:text-sm placeholder:text-gray-400' onChange={(e) => setNewSkill(e.target.value)} value={newSkill} onKeyDown={(e) => handleKeyPress(e)}/>
        <button className='flex items-center   gap-1 bg-blue-500 rounded-md px-3 py-1 text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer' onClick={() => addSkill()}><Plus className='size-5'/>Add</button>
      </div>
      {data.length>0 ? (
        <div className='flex flex-wrap gap-2'>
          {data.map((skill,index) => {
            return (
              <div key={index} className='flex items-center gap-2 bg-blue-500 rounded-lg px-1 py-1'>
                <p className='text-[12px] text-white'>{skill}</p>
                <X className='size-4 text-white cursor-pointer' onClick={() => removeSkill(index)}/>
              </div>
            )
          })}
        </div>
      ): (
        <div className='flex flex-col gap-1 items-center justify-center text-gray-400 h-[150px]'>
          <Sparkles className='size-10' />
          <p className='text-[16px]'>No Skills added yet</p>
          <p className='text-sm'>Add your technical and soft skills above</p>
        </div>
      )}
      <div className='w-full bg-blue-100 px-2 py-2 rounded-md '>
        <p className='text-blue-600 text-[13px] w-[78%]'><span className='font-semibold text-blue-700 text-[15px]'>Tip</span> : Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (leadership, communication).</p>
      </div>
    </div>
  )
}

export default SkillsForm
