import React from 'react'
import { Navbar } from '../components'
import { AiOutlineWechat } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className='flex'>
        <Navbar />
        <main className='flex-1 p-6 bg-gray-100 min-h-screen'>
            <div className="search-bar right-10 top-6 fixed">
                <input type="search" name="" id="" placeholder='Search ...' 
                className='rounded-full outline-none md:py-2 py-1 px-4 shadow-lg backdrop-blur-lg focus:shadow-blue-200' />
            </div>

            <div className='Ai right-10 md:right-18 fixed bottom-24 md:bottom-6 shadow-lg backdrop-blur-lg p-2 rounded-full hover:bg-trasparent hover:shadow-blue-300'>
                <AiOutlineWechat className='text-4xl text-blue-500  hover:cursor-pointer '/>
                 <p className='hidden'>AI Assistant</p>
            </div>

        </main>
        
    </div>
  )
}

export default Dashboard