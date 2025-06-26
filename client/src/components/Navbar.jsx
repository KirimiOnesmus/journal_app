import React from 'react'
import { MdMenuBook} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import profile from '../assets/profile.png'
import { Profile } from '../pages';

    const sidebar=[
        {
            title: "Home",
            icon:"🏠",
            route: "/dashboard"
            
        },
        {
            title: "My Entries",
            icon:  "📅",
            route: "/dashboard/entries"
        },
        {
            title: "Calendar",
            icon:"📝",
            route: "/dashboard/calendar"
        }
     ]

    
const Navbar = () => {
         const location = useLocation();
        //  const[showprofile, setShowProfile] = React.useState(false);
        const user =JSON.parse(localStorage.getItem('user')); //Fetching user data
  return (
    <div>
      
        {/* Desktop screen */}
        <aside className="hidden md:flex flex-col w-56 h-screen bg-white shadow-md py-4 gap-1">
            <h3><a href="#" className='flex gap-2 text-2xl mb-6 font-bold px-2'>Daily Journal<MdMenuBook className='text-blue-400'/></a></h3>
            {sidebar.map((item) => (
                <Link  
                key={item.name}
                to={item.route}
            className={`flex items-center gap-2 p-3 rounded-md hover:bg-blue-100 ${
              location.pathname === item.route ? "bg-blue-100 text-blue-600" : ""
            }`}>
                    <span className="text-xl">{item.icon}</span>        
                    <span>{item.title}</span>
                </Link>))}
            <Link className="flex items-center gap-2 p-3 mt-auto hover:bg-gray-100 cursor-pointer rounded-full"
            to="/dashboard/profile" >
                <img src={profile} alt="Profile" className   ='w-10 h-10 rounded-full'/>
                <div>
                    <p className='text-lg font-semibold'>{user.userName}</p>
                    <p className='text-sm text-gray-500'>Settings</p>   
                </div>
            </Link>
        </aside>
          {/* Mobile Bottom Nav */}
          <nav className='md:hidden fixed bottom-4 left-0 right-0 bg-transparent  shadow-lg flex justify-around py-2 z-50 backdrop-blur-lg rounded-full mx-4 mb-2'>
            {
                sidebar.map((item) => (
                    <Link 
                    key={item.name}
                    to={item.route}
                    className={`flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 ${
                        location.pathname === item.route ? "bg-gray-200 text-blue-600" : ""
                    }`}>
                        <span className="text-xl">{item.icon}</span>
                        
                    </Link>
                  
                ))
                
            }
           <Link 
                to="/dashboard/profile" 
                className='cursor-pointer flex items-center justify-center p-1 rounded-full hover:bg-gray-100'
                >
                <img src={profile} alt="" className='h-10 w-10' />
                </Link>

          </nav>

    </div>
  )
}

export default Navbar