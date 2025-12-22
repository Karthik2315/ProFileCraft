import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux';
import LoaderOg from '../components/LoaderOg';
import Login from './Login';

const Layout = () => {
  const  {user,loading} = useSelector(state => state.auth);
  if(loading)
  {
    return <LoaderOg />
  }
  return (
    <div>
    {
      user ? (
        <div className='min-h-screen bg-gray-200'>
          <Navbar />
          <Outlet />
        </div>
      ) : <Login />
    }

    </div>
  )
}

export default Layout
