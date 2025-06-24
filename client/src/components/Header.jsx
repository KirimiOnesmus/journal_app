// import React,{useState} from 'react'
// import { FaHome,FaTrafficLight } from "react-icons/fa";
// import { LuBrainCircuit } from "react-icons/lu";
// import { MdMenuBook } from "react-icons/md";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div className='flex justify-between items-center p-4 fixed text-balck shadow-md backdrop-blur-sm w-full bg-transparent'>
//         <div className="logo">
//             <a href="#" className='text-xl md:text-2xl font-bold flex gap-2'>Daily Journal<MdMenuBook className='text-blue-500'/></a> 
//         </div>
//         <div className="nav hidden md:flex items-center justify-between gap-6">
//             <div className="nav-links flex space-x-14 uppercase">
//               <a href="/" 
//               className='hover:text-blue-500 hover:text-xl hover:font-semibold  flex items-center gap-1 transition duration-500'><FaHome className='text-xl'/>Home</a>
//               <a href="" className='hover:text-blue-500 hover:text-xl hover:font-semibold flex items-center gap-1 transition duration-500'><FaTrafficLight className='text-xl'/>Features</a>
//               <a href="/" className='hover:text-blue-500 hover:text-xl hover:font-semibold flex items-center gap-1 transition duration-500'><LuBrainCircuit className='text-xl'/>Why it Matters</a>
              
//           </div>
//           <button className='bg-black text-white px-8 py-2 rounded-full  transition duration-200'>
//               <a href="/login" className='text-xl font-bold'>Join Us</a>
//           </button>
//         </div>
//         <div className="md:hidden px-4 ">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <HiX className="text-3xl cursor-pointer hover:text-blue-500" /> : <HiMenuAlt3 className="text-3xl cursor-pointer hover:text-blue-500" />}
//           </button>
//         </div>
//               {menuOpen && (
//         <div className="md:hidden flex flex-col bg-white px-6 py-4 gap-4 shadow-md">
//           <a href="/" className="flex items-center gap-2"><FaHome /> Home</a>
//           <a href="#features" className="flex items-center gap-2"><FaTrafficLight /> Features</a>
//           <a href="#why" className="flex items-center gap-2"><LuBrainCircuit /> Why it Matters</a>
//           <a href="/login" className="bg-black text-white text-center py-2 rounded-full">Join Us</a>
//         </div>
//       )}
        
//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { FaHome, FaTrafficLight } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-md'>
      <div className='flex justify-between items-center p-4'>
        <div className="logo">
          <a href="#" className='text-xl md:text-2xl font-bold flex gap-2'>Daily Journal <MdMenuBook className='text-blue-500' /></a>
        </div>

        {/* Desktop Nav */}
        <div className="nav hidden md:flex items-center justify-between gap-6">
          <div className="nav-links flex space-x-14 uppercase">
            <a href="/" className='hover:text-blue-500 flex items-center gap-1'> <FaHome /> Home</a>
            <a href="#features" className='hover:text-blue-500 flex items-center gap-1'> <FaTrafficLight /> Features</a>
            <a href="#why" className='hover:text-blue-500 flex items-center gap-1'> <LuBrainCircuit /> Why it Matters</a>
          </div>
          <a href="/login" className='bg-black text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition'>Join Us</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden px-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-3xl hover:text-red-500 hover:cursor-pointer" /> : <HiMenuAlt3 className="text-3xl hover:text-blue-500 hover:cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full z-50 bg-white shadow-lg px-6 py-4 flex flex-col justify-center items-center gap-4">
          <a href="/" className="flex items-center gap-2 hover:text-blue-500"><FaHome /> Home</a>
          <a href="#features" className="flex items-center gap-2 hover:text-blue-500"><FaTrafficLight /> Features</a>
          <a href="#why" className="flex items-center gap-2 hover:text-blue-500"><LuBrainCircuit /> Why it Matters</a>
          <a href="/login" className="bg-black text-white text-center py-2 rounded-full w-full">Join Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;