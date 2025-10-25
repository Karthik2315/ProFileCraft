import { Sparkle, Sparkles } from 'lucide-react'
import React from 'react'

const ProfessionalSummaryForm = ({data,onChange,setResumeData}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center mb-8' >
        <div>
          <h2 className='font-semibold text-[20px]'>Professional Summary</h2>
          <p className='text-sm text-gray-500'>Add summary for your resume here</p>
        </div>
        <button className='flex gap-1 text-sm border border-transparent rounded-md p-2 bg-violet-200 text-violet-700 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 hover:border-violet-700'><Sparkles className='size-5'/> AI Enhance</button>
      </div>
      <div className='w-full px-2'>
        <textarea value={data || ''} onChange = {(e) => onChange(e.target.values)} className='w-full h-[195px] p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none text-gray-500 placeholder:text-gray-500' placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."></textarea>
      </div>
      <div className='flex justify-center text-center mb-10'>
        <p className='text-[12px] text-gray-500 w-[350px]'>Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm
