import { Zap } from 'lucide-react';
import React, { useState } from 'react'

const Features = () => {
  const [isHover,setIsHover] = useState(false);
  return (
      <div id='features' className='flex flex-col items-center my-10 scroll-mt-15 text-center'>
        <div class="flex items-center gap-2 text-sm text-red-800 bg-red-400/10  rounded-full px-6 py-1.5 cursor-pointer">
            <Zap width={14}/>
            <span>Simple Process</span>
        </div>
        <h1 className='text-4xl font-sembold mt-7 mb-5'>Build your Resume</h1>
        <p className='text-gray-500 text-base w-[650px]'>Our streamlined process will help you create a professional resume in minutes with intelligent AI-powered tools and features</p>
        <div className='flex flex-col mt-25 gap-5 px-45'>
          <div className='flex justify-between'>
            <div className='flex flex-col items-center gap-3 w-[40%] border border-hidden hover:border rounded-3xl p-8'>
              <h2 className='text-2xl font-semibold'>🧠 AI-Powered Writing Assistance</h2>
              <p className='text-gray-500 text-base'>
                Get intelligent suggestions for every section — from summary to experience — so your resume always sounds professional and tailored to your industry.
              </p>
            </div>
            <div className='flex flex-col items-center gap-3 w-[40%] border rounded-3xl p-8'>
              <h2 className='text-2xl font-semibold'>🎨 Professional Templates</h2>
              <p className='text-gray-500 text-base'>
                Choose from modern, recruiter-approved templates that are ATS-friendly and designed to make you stand out instantly.
              </p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col items-center gap-3 w-[40%] border rounded-3xl p-8'>
              <h2 className='text-2xl font-semibold'>⚡ One-Click Customization</h2>
              <p className='text-gray-500 text-base'>
                Easily edit layout, fonts, and colors to match your personal brand with a simple, intuitive interface — no design skills needed.
              </p>
            </div>
            <div className='flex flex-col items-center gap-3 w-[40%] border rounded-3xl p-8'>
              <h2 className='text-2xl font-semibold'>📊 ATS Optimization</h2>
              <p className='text-gray-500 text-base'>
                Automatically scan your resume for keywords and formatting issues to ensure it passes applicant tracking systems..
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Features
