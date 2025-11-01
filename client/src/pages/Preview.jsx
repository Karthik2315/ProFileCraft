import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeft, Loader } from 'lucide-react';
import ResumePreivew from '../components/ResumePreivew';
import LoaderOg from '../components/LoaderOg';

const Preview = () => {
  const {resumeId} = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [resumeData,setResumeData] = useState(null);
  const loadResumeData = async() => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
    setIsLoading(false);
  }
  useEffect(()=> {
    loadResumeData();
  },[])
  return resumeData ?  (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreivew data={resumeData} template={resumeData.template} accentColor={resumeData.accentColor} classes='py-4 bg-white' />
      </div>
    </div>
  ) : (
    <div className='min-h-screen'>
      {isLoading ? <LoaderOg /> : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-center text-6xl text-slate-400 font-medium'>Resume not found</p>
          <a href='/' className='mt-6 bg-red-500 hover:bg-red-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-red-400 flex items-center transition-colors'>
            <ArrowLeft className='mr-2 size-4' />
            Go to home page
          </a>
        </div>
      ) }
    </div>
  )
}

export default Preview
