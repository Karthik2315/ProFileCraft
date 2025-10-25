import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, LayoutTemplate } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EyeOff } from 'lucide-react'
import { Download } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Share2 } from 'lucide-react'
import { dummyResumeData } from '../assets/assets'
import { User,FileText,Briefcase,GraduationCap,FolderIcon,Sparkles,Palette } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreivew from '../components/ResumePreivew'
import Template_Selector from '../components/Template_Selector'
import AccentColor_Selector from '../components/AccentColor_Selector'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'

const ResumeBuilder = () => {
  const {resumeId} = useParams();
  const [resumeData, setResumeData] = useState({
  _id: '',
  title: '',
  personal_info: {},
  professional_summary: "",
  experience: [],
  education: [],
  project: [],
  skills: [],
  template: "classic",
  accent_color: "#3B82F6",
  public: false,
  });
  const [activeSectionIndex,setActiveSectionIndex] = useState(0);
  const [removeBackGround,setRemoveBackGround] = useState(false);

  const loadExistingResume = async() => {
    const resume = dummyResumeData.find(resume => resume._id === resumeId);
    if(resume)
    {
      setResumeData(resume)
      document.title = resume.title;
    }
  }

  const sections = [
  { id: "personal", name: "Personal Info", icon: User },
  { id: "summary", name: "Summary", icon: FileText },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "projects", name: "Projects", icon: FolderIcon },
  { id: "skills", name: "Skills", icon: Sparkles }
];

  const activeSection = sections[activeSectionIndex];

  useEffect(() => {
    loadExistingResume();
  },[]);

  console.log(resumeData)

  const navigate = useNavigate();
  const [isPrivate,setIsPrivate] = useState(true)
  return (
    <div className='flex flex-col bg-white/20 min-h-screen'>
    <div className='flex justify-between px-25'>
      <div className='flex mt-8 gap-2 group cursor-pointer' onClick={()=>navigate('/app')}>
        <ArrowLeft className='w-4 text-slate-400 group-hover:text-gray-600' />
        <p className='text-slate-400 group-hover:text-gray-600 cursor-pointer'>Back to DashBoard</p>
      </div>
      <div className='flex gap-2 mt-8'>
        {!isPrivate && (
          <button className='flex gap-2 text-sm items-center bg-blue-200 rounded-md px-4 py-1 text-blue-600 cursor-pointer border border-transparent hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-500'><Share2 className='w-4'/> Share</button>

        )}
        <button className='flex gap-2 text-sm items-center bg-violet-200 rounded-md px-4 py-1 text-violet-600 cursor-pointer border border-transparent hover:border-violet-600 hover:scale-105 active:scale-95 transition-all duration-500' onClick={() => setIsPrivate(prev => !prev)}>{isPrivate ? <EyeOff className='w-4'/> : <Eye className='w-4' />} {isPrivate ? 'Private' : 'Public' }</button>
        <button className='flex gap-2 text-sm items-center bg-green-200 rounded-md px-4 py-1 text-green-600 cursor-pointer border border-transparent hover:border-green-600 hover:scale-105 active:scale-95 transition-all duration-500'><Download className='w-4'/> Download</button>
      </div>
    </div>
    <div className='w-full mx-auto px-4 pb-8 mt-5'>
        <div className='px-20 grid lg:grid-cols-12 gap-8'>
          {/* left form */}
          <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
              <hr className='absolute top-0 left-0 right-0 border-2 border-gray-500/20' />
              <hr className='absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 border-none transition-all duration-2000' style={{width:`${activeSectionIndex *100 /(sections.length - 1)}%`}} />
              <div className='flex justify-between items-center mb-6 border-b border-gray-500 py-3'>
                <div className='flex gap-2'>
                  <Template_Selector selectedTemplate={resumeData.template} onChange={(selectedTemplate) => setResumeData(prev => ({...prev,template:selectedTemplate}))} />
                  <AccentColor_Selector selectedAccentColor={resumeData.accent_color} onChange={(selectedAccentColor) => setResumeData(prev => ({
                    ...prev,accent_color:selectedAccentColor
                  }))} />
                </div>
                <div className='flex gap-3'>
                {activeSectionIndex > 0 && 
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setActiveSectionIndex(prev => prev-1)}>
                    <ChevronLeft className='size-5'/>
                    <p className='text-md text-gray-500'>Prev</p>
                  </div> }
                {activeSectionIndex < (sections.length - 1) && 
                  <div className='flex gap-1 items-center cursor-pointer' onClick={() => setActiveSectionIndex(prev => prev+1)}>
                    <p className='text-md text-gray-500'>Next</p>
                    <ChevronRight className='size-5'/>
                  </div> }
                </div>
              </div>
              {/* form content */}
              <div>
                {activeSection.id === "personal" &&
                <PersonalInfoForm data={resumeData['personal_info']} onChange={(data) => setResumeData(prev => ({...prev,personal_info:data}))}/> }
                {activeSection.id === "summary" && 
                <ProfessionalSummaryForm data={resumeData['professional_summary']} onChange={(summary) => setResumeData(prev=> ({...prev,professional_summary:summary}))} setResumeData={setResumeData} /> }
                {activeSection.id === "experience" && 
                <ExperienceForm />}
              </div>
            </div>
          </div>
          {/* right form */} 
          <div className='lg:col-span-7 max-lg:mt-6'>
            <div>
              <ResumePreivew data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
            </div>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default ResumeBuilder
