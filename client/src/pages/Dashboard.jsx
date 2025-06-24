import React from 'react'
import { Navbar } from '../components'
import { AiOutlineWechat } from "react-icons/ai";
import{Home,Entries,CalendarView} from '../components'
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <Navbar />
        <main className='flex-1 p-6 bg-gray-100 min-h-screen overflow-scroll overflow-x-hidden relative'>
            <div className="search-bar right-10 top-6 fixed">
                <input type="search" name="" id="" placeholder='Search ...' 
                className='rounded-full outline-none md:py-2 py-1 px-4 shadow-lg backdrop-blur-lg focus:shadow-blue-200' />
            </div>

            <div className='group fixed  right-10 md:right-18 bottom-24 md:bottom-6 bg-transparent p-2 rounded-full '>
                <AiOutlineWechat className='text-4xl text-blue-500  hover:cursor-pointer '/>
                 <p 
                 className='absolute w-64 bottom-full right-10 mb-2 opacity-0 group-hover:opacity-100 transition duration-300 text-lg mt-1 text-center shadow-lg bg-white/30 backdrop-blur-md px-2 py-1 rounded-lg  shadow-blue-300'
                 >Chat With Our AI Assistant</p>
            </div>
            <div 
              className="main-contents flex-1 p-4 mt-14 pb-20 md:pb-4 overflow-y-auto shadow-2xl bg-white rounded-lg shadow-blue-400">
                 <Outlet />
            </div>

        </main>
        
    </div>
  )
}

export default Dashboard