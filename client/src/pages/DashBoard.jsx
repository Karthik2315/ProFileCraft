import React, { useEffect, useState } from 'react'
import {FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon} from 'lucide-react'
import { dummyResumeData } from '../assets/assets';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const colors = [
  "#9333ea",
  "#d97706",
  "#dc2626",
  "#0284c7",
  "#16a34a"
]

  const [allResumes,setAllResumes] = useState([]);
  const loadAllResumes = async() => {
    setAllResumes(dummyResumeData)
  }
  const [showCreateResume,setShowCreateResume] = useState(false);
  const [showUploadResume,setShowUploadResume] = useState(false);
  const [title,setTitle] = useState('');
  const [resume,setResume] = useState(null);
  const [editResumeid,setEditResumeid] = useState(null);
  const navigate = useNavigate();

  const createResume = async(e) =>{
    e.preventDefault();
    setTimeout(() => {
      setShowCreateResume(false);
      navigate('/app/builder/res123')
    },500)
  }

  const uploadResume = async(e) =>{
    e.preventDefault();
    setTimeout(() => {
      setShowUploadResume(false);
      navigate('/app/builder/res123')
    },500)
  }

  useEffect(() => {
    loadAllResumes();
  },[])
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent'>Welcome, Karthik</p>
        <div className='flex gap-4'>
          <button className='w-36 bg-white h-48 flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-500 group hover:border-indigo-400 hover:shadow-lg transition-all duration-500 cursor-pointer' onClick={() => setShowCreateResume(true)}>
            <PlusIcon  className='size-11 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full p-2.5'/>
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300 mt-4'>Create Resume</p>
          </button>
          <button className='w-36 bg-white h-48 flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-500 group hover:border-indigo-400 hover:shadow-lg transition-all duration-500 cursor-pointer' onClick={() => setShowUploadResume(true)}>
            <UploadCloudIcon  className='size-11 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full p-2.5'/>
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300 mt-4'>Upload Existing</p>
          </button>
        </div>
        <hr className='border-slate-500 my-6 w-[305px]' />    
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                key={index}
                className='relative w-full sm:max-w-36 h-48 flex
                  flex-col items-center justify-center rounded-lg gap-2 border group
                  hover:shadow-lg transition-all duration-300 cursor-pointer'
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40'
                }}
              >
                <FilePenLineIcon className='size-7 group-hover:scale-105 transition-all' style={{color:baseColor}} />
                <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' >{resume.title}</p>
                <p className='absolute bottom-1 text-[11px] text-slate-500 group-hover:text-slate-600 transition-all duration-300 px-2 text-center' style={{color:baseColor+'90'}}>Updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>
                <div className='absolute top-1 right-1 group-hover:flex items-center hidden '>
                  <TrashIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'/>
                  <PencilIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                </div>
              </button>
            );
          })}
        </div>
        {showCreateResume && (
          <form onSubmit={createResume} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center' onClick={() => setShowCreateResume(false)}>
            <div className='relative bg-white flex flex-col p-4 rounded-2xl w-[400px]' onClick={e => e.stopPropagation()}>
              <h2 className='text-[20px] mb-3'>Create a Resume</h2>
              <input type="text" placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 border border-gray-400 focus:outline-none focus:border-red-600 focus:border-2  rounded-2xl placeholder:text-gray-500 mb-3' required onChange={(e)=>setTitle(e.target.value)} value={title}/>
              <button className='px-10 py-2 text-white bg-red-600 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'>Create Resume</button>
              <X className='absolute top-4 right-4 w-5 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors' onClick={() => {
                setShowCreateResume(false);setTitle('')
              }}/>
            </div>
          </form>
        )}
        {showUploadResume && (
          <form onSubmit={uploadResume} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center' onClick={() => setShowUploadResume(false)}>
            <div className='relative bg-white flex flex-col p-4 rounded-2xl w-[400px]' onClick={e => e.stopPropagation()}>
              <h2 className='text-[20px] mb-3'>Upload Resume</h2>
              <input type="text" placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 border border-gray-400 focus:outline-none focus:border-red-600 focus:border-2  rounded-2xl placeholder:text-gray-500 mb-3' required onChange={(e)=>setTitle(e.target.value)} value={title}/>
              <div>
                <label htmlFor='resume-input' className='block text-sm text-slate-700'>
                  Select a resume file
                  <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-red-500 hover:text-red-700 cursor-pointer transition-colors'>
                    {resume ? (
                      <p className='text-red-700'>{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloudIcon className='size-14 stroke-1'/>
                        <p>Upload Resume</p>
                      </>
                    )}
                  </div>
                </label>
                <input type="file" id="resume-input" accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
              </div>
              <button className='px-10 py-2 text-white bg-red-600 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95'>Upload Resume</button>
              <X className='absolute top-4 right-4 w-5 text-slate-400 hover:text-slate-500 cursor-pointer transition-colors' onClick={() => {
                setShowUploadResume(false);setTitle('')
              }}/>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default DashBoard
