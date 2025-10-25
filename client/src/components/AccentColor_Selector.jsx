import React, { useState } from 'react'
import { Check, Palette } from 'lucide-react'

const AccentColor_Selector = ({selectedAccentColor,onChange}) => {
  const [isOpen,setIsOpen] = useState(false);
  const colors = [
    "Blue","Indigo","Purple","Green","Red","Orange","Teal","Pink","Gray","Black"
  ]
  const colorClasses = {
  Blue: 'bg-blue-500',
  Indigo: 'bg-indigo-500',
  Purple: 'bg-purple-500',
  Green: 'bg-green-500',
  Red: 'bg-red-500',
  Orange: 'bg-orange-500',
  Teal: 'bg-teal-500',
  Pink: 'bg-pink-500',
  Gray: 'bg-gray-500',
  Black: 'bg-black',
};

  return (
    <div className='relative'>
      <button className='flex gap-2 items-center px-3 py-2 bg-violet-200/40 rounded-md text-violet-600 cursor-pointer border border-transparent hover:border-violet-700 text-sm hover:scale-105 transition-all active:scale-95' onClick={() => setIsOpen(prev => !prev)}><Palette className='size-5'/> Accent</button>
      {isOpen && 
      <div className='absolute grid grid-cols-4 z-10  gap-3 p-4 bg-white rounded-md shadow-md w-64 mt-4 border border-gray-200 shadow-md' >
      {colors.map((color) => {
        return (
          <div key={color} className={`flex flex-col items-center text-center cursor-pointer ${selectedAccentColor === color ? '' : 'hover:scale-105 transition-all duration-200 active:scale-95'}`} onClick={() => onChange(color)}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
              {color === selectedAccentColor && <Check className='size-5 text-white' />}
            </div>
            <p className='text-sm text-gray-500'>{color}</p>
          </div>
        )
      })}
      </div> }
    </div>
  )
}

export default AccentColor_Selector
