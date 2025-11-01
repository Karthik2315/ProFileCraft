import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { Loader } from 'lucide-react';

const Preview = () => {
  const {resumeId} = useParams();
  const [resumeData,setResumeData] = useState(null);
  const loadResumeData = async() => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
  }
  useEffect(()=> {
    loadResumeData();
  },[])
  return resumeData ?  (
    <div className='bg-slate-100'>
      
    </div>
  ) : (
    <>
      <Loader />
    </>
  )
}

export default Preview
