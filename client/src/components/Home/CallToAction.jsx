import React from 'react'
import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-28'>
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-medium max-w-md text-slate-800">Build a professional Resume  that helps you Stand out and get Hired</p>
                <button className='bg-red-500 text-white px-15 py-2 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95' onClick={() => navigate('/app')}>Get Started</button>
            </div>
        </div>
    )
}

export default CallToAction
