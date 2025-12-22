import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import DashBoard from './pages/DashBoard.jsx'
import ResumeBuilder from './pages/ResumeBuilder.jsx'
import Login from './pages/Login.jsx'
import Preview from './pages/Preview.jsx'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { login, setLoading } from './app/features/authSlice.js'

const App = () => {
  const dispatch = useDispatch();
  const getUserData = async() => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/protected`,{withCredentials:true})
      if(res.data.success)
      {
        const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/me`,{withCredentials:true})
        if(data.user)
        {
          dispatch(login({user:data.user}))
        }
        dispatch(setLoading(false));
      }
      else
      {
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log(error)
      dispatch(setLoading(false));
    }

  }
  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='app' element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>
        <Route path='/view/:resumeId' element={<Preview />} />
      </Routes>
    </>
  )
}

export default App
