import React from 'react'
import { FaHome,FaTrafficLight } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 fixed text-balck shadow-md backdrop-blur-sm w-full bg-transparent'>
        <div className="logo">
            <a href="#" className='text-xl md:text-2xl font-bold flex gap-2'>Daily Journal<MdMenuBook className='text-blue-500'/></a> 
        </div>
        <div className="nav hidden md:flex items-center justify-between gap-6">
            <div className="nav-links flex space-x-14 uppercase">
              <a href="/" 
              className='hover:text-blue-500 hover:text-xl hover:font-semibold  flex items-center gap-1 transition duration-500'><FaHome className='text-xl'/>Home</a>
              <a href="" className='hover:text-blue-500 hover:text-xl hover:font-semibold flex items-center gap-1 transition duration-500'><FaTrafficLight className='text-xl'/>Features</a>
              <a href="/" className='hover:text-blue-500 hover:text-xl hover:font-semibold flex items-center gap-1 transition duration-500'><LuBrainCircuit className='text-xl'/>Why it Matters</a>
              
          </div>
          <button className='bg-black text-white px-8 py-2 rounded-full  transition duration-200'>
              <a href="/login" className='text-xl font-bold'>Join Us</a>
          </button>
        </div>
        
    </div>
  )
}

export default Header