import { Plus, Trash } from 'lucide-react';
import React from 'react'

const ProjectForm = ({data,onChange}) => {
  const addProject = () => {
    const newProject = {
      name:"",
      type:"",
      description:""
    }
    onChange([...data,newProject]);
  }
  const removeProject = (index) =>{
    const updated = data.filter((_,i) => i!=index);
    onChange(updated);
  }
  const updateProject = (index,field,value) => {
    const updated = [...data];
    updated[index] = {...updated[index],[field]:value};
    onChange(updated)
  }
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-[19px]'>Projects</h2>
          <p className='text-sm text-gray-500'>Add your Projects</p>
        </div>
        <button className='flex gap-1 items-center px-1 py-1 bg-green-200 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95' onClick={() => addProject()}>
          <Plus className='size-4 text-green-500'/>
          <p className='text-[14px] text-green-500'>Add Project</p>
        </button>
      </div>
      {data.length>0 && (
        <div className='space-y-4 mt-5'>
          {data.map((project,index) => {
            return (
              <div key={index} className='flex flex-col p-4 border border-gray-400 rounded-lg space-y-3'>
                <div className='flex justify-between'>
                  <p>Project #{index+1}</p>
                  <button onClick={() => removeProject(index)} className='cursor-pointer'><Trash className='size-4 text-red-500 hover:text-red-800'/></button>
                </div>
                <input type='text' placeholder='Project Name' className='w-full px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateProject(index,"name",e.target.value)} value={project.name || ""}/>
                <input type='text' placeholder='Project type' className='w-full px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateProject(index,"type",e.target.value)} value={project.type || ""}/>
                <textarea rows={6} placeholder='Project Description....' className='w-full px-3 py-2 text-[13px] rounded-lg text-gray-500 border border-gray-300' onChange={(e) => updateProject(index,"description",e.target.value)} value={project.description || ""}/>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}

export default ProjectForm
