import { GraduationCap, Plus, Trash } from 'lucide-react'
import React from 'react'

const EducationForm = ({data,onChange}) => {
  const addEducation = () => {
    const newEducation = {
      institution:"",
      degree:"",
      field:"",
      graduation_date:"",
      gpa:""
    }
    onChange([...data,newEducation]);
  }
  const removeEducation = (index) =>{
    const updated = data.filter((_,i) => i!=index);
    onChange(updated);
  }
  const updateEducation = (index,field,value) => {
    const updated = [...data];
    updated[index] = {...updated[index],[field]:value};
    onChange(updated)
  }
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-[19px]'>Education</h2>
          <p className='text-sm text-gray-500'>Add your education details</p>
        </div>
        <button className='flex gap-1 items-center px-1 py-1 bg-green-200 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95' onClick={() => addEducation()}>
          <Plus className='size-4 text-green-500'/>
          <p className='text-[14px] text-green-500'>Add Education</p>
        </button>
      </div>
      {data.length===0 ? (
        <div className='flex justify-center items-center h-[300px]'>
          <div className='flex flex-col items-center justify-center'>
            <GraduationCap className='size-15 text-gray-300' />
            <p className='text-gray-400 text-[18px]'>No Education added yet</p>
            <p className='text-gray-400 text-[14px]'>Click "Add Education" to get started</p>
          </div>
        </div>
      ):(
        <div className='space-y-4 mt-5'>
          {data.map((education,index) => {
            return (
              <div key={index} className='flex flex-col p-4 border border-gray-400 rounded-lg space-y-3'>
                <div className='flex justify-between'>
                  <p>Education #{index+1}</p>
                  <button onClick={() => removeEducation(index)} className='cursor-pointer'><Trash className='size-4 text-red-500 hover:text-red-800'/></button>
                </div>
                <div className='flex justify-between'>
                  <input type='text' placeholder='Instituition Name' className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateEducation(index,"institution",e.target.value)} value={education.institution || ""}/>
                  <input type='text' placeholder='Degree' className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateEducation(index,"degree",e.target.value)} value={education.degree || ""}/>
                </div>
                <div className='flex justify-between'>
                  <input type='text' placeholder='Field of study'  className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateEducation(index,"field",e.target.value)} value={education.field || ""}/>
                  <input type='month'  className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300 disabled:bg-gray-200' onChange={(e) => updateEducation(index,"graduation_date",e.target.value)} value={education.graduation_date || ""}/>
                </div>
                <div className='flex justify-between'>
                  <input type='text' placeholder='GPA (Optional)' className='w-[200px] px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateEducation(index,"gpa",e.target.value)} value={education.gpa || ""}/>
                </div>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}

export default EducationForm
