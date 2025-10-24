import React from 'react'
import { Github, Link2 } from "lucide-react";


const Footer = () => {
  return (
    <div className='flex justify-between items-center px-15 py-15 mt-30 bg-gradient-to-r from-white to-red-500'>
      <p className='text-3xl font-semibold cursor-pointer'>resume <span className='inline-block w-3 h-3 bg-red-500 rounded-full cursor-pointer'/></p>
      <div className='flex flex-col items-center gap-3 text-center'>
        <p className='tex-sm w-[280px] text-gray-700'>Making every customer feel valued no matter the size of your audience</p>
        <div className='flex gap-2'>
        <Github className="w-6 h-6 text-black hover:text-gray-500" />
            <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin size-5 hover:text-gray-500" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>       
        </div>
            <p className="text-sm text-gray-700 cursor-pointer">
              © 2025 Karthik
            </p> 
      </div>
    </div>
  )
}

export default Footer