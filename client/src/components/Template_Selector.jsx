import { FileIcon, LayoutTemplate } from 'lucide-react';
import React, { useState } from 'react'
import { CircleCheck } from 'lucide-react';

const Template_Selector = ({selectedTemplate,onChange}) => {
  const [isOpen,setIsOpen] = useState(false);
  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography"
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleed design with strategic use of color and modern font choices"
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography"
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center"
    } 
  ]
  const handleClick = (FieldId) => {
    onChange((FieldId))
  } 
  return (
    <div className='relative'>
      <button className='flex gap-2 items-center px-3 py-2 bg-blue-200/40 rounded-md text-blue-600 cursor-pointer border border-transparent hover:border-blue-700 text-sm hover:scale-105 transition-all active:scale-95' onClick={() => setIsOpen(prev => !prev)}><LayoutTemplate className='size-5'/> Templates</button>
      {isOpen && (
        <div className='absolute top-full w-xs p-3 pb-5 mt-4 z-10 bg-white rounded-md border border-gray-200 shadow-md'>
          {templates.map((field) => {
            return (
              <div key={field.id} className={`flex flex-col mb-5 border  p-3 rounded-md cursor-pointer  ${selectedTemplate === field.id ? 'bg-blue-200 border-blue-700' : 'border-gray-500 hover:bg-gray-200'}`} onClick={() => handleClick(field.id)}>
                <div className='flex justify-between'> 
                  <h2 className='font-medium mb-1'>{field.name}</h2>
                  {selectedTemplate === field.id && <CircleCheck className='size-5 text-blue-700'/>}
                </div>
              <p className='text-[12px] text-gray-500 p-2 bg-indigo-100 border rounded-md'>{field.preview}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Template_Selector
