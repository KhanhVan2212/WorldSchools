import React from 'react'
import SlideBar from '../../components/SlideBar/SlideBar'
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className='float-left relative'>
        <SlideBar />
        <div className='absolute top-0 left-72 w-[950px]'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoard