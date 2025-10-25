import { BriefcaseBusiness, Globe, Linkedin, MailIcon, MapPin, Phone, User } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({data,onChange,removeBackground,setRemoveBackground}) => {
  const handleChange = async(field,value) => {
    onChange({...data,[field]:value})
  }
  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: MailIcon, type: "email", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" }
  ];
  return (
    <div className='flex flex-col gap-1'>
      <h3 className='font-bold text-[17px]'>Personal Information</h3>
      <p className='text-sm text-gray-500'>Get Started with personal information</p>
      <div className='flex gap-2 mt-1 items-center'>
        <label>
          {data.image ? ( 
            <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt="User photo" className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80' />
          ) : (
            <div className='flex gap-2 items-center cursor-pointer'>
              <User className='size-10 p-2.5 border rounded-full' /> 
              <p className='text-[15px] text-gray-500 hover:text-gray-700'>Upload User Image</p>
            </div>
          )}
          <input type="file" accept='image/jpeg, image/png' className='hidden' onChange={(e) => handleChange('image',e.target.files[0])} />
        </label>
        {typeof data.image === "object" && (
          <div className='flex flex-col gap-1 pl-3 text-sm'>
            <p className='text-gray-800'>Remove Background</p>
            <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground(prev => !prev)}
                checked={removeBackground}
              />
              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-red-600 transition-colors duration-300'>
              </div>
              <span className='dot absolute left-1 top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ease-in-out peer-checked:translate-x-4' ></span>
            </label>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-2 mt-5 ml-2' >
        {fields.map((item) => {
          return (
          <div className='mb-3'>
            <div className='flex gap-3 mb-1' >
            <item.icon className='size-5'/>
            <p className='text-md text-slate-500' >{item.label}</p>
            </div> 
            <input type={item.type} placeholder={`Enter your ${item.label.toLowerCase()}`} required={item.required} className='
            outline-none p-2 border rounded-xl w-full border-gray-500 focus:border-transparent placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 ' onChange={(e) => handleChange(item.key,e.target.value)} value={data[item.key] || ''}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default PersonalInfoForm
