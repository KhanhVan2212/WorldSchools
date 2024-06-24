import React from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className='flex justify-center'>
        <SlideBar />
        <div className='ml-36 w-2/3'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoard