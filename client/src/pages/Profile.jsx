import React from 'react'
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/profile.png'
const Profile = () => {
  return (
    <div className='flex flex-col min-h-screen bg-linear-to-r from-cyan-400 to-blue-100 w-full'>
        <div className=" md:bg-white/30 backdrop-blur-md px-4 md:px-8 py-4 rounded-lg shadow-lg w-full max-w-5xl mx-auto mt-4">
            <h2 className='text-3xl font-bold'>Profile Update</h2>
            <form action="">
                <div className='md:flex md:mx-4 mt-2 justify-between'>
    
                    <div className="socials flex flex-col gap-4 mt-6 w-full md:w-lg md:m-4">
                         <div className="avatar flex items-center justify-center mb-4 ">
                            <img src={profile} alt="Profile" className=' cursor-pointer text-center w-24 h-24 rounded-full shadow-md'/>
                            
                         </div>
                        
                        <div className="facebook w-full flex items-center gap-2">
                            <FaFacebook className='font-bold text-2xl text-blue-600'/>
                            <input type="text" name='facebook' placeholder='Add Facebook' 
                            className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none w-full md:w-72'/>
                        </div>
                        <div className="instagram w-full flex items-center gap-2">
                            <FaInstagram className='font-bold text-2xl text-fuchsia-400'/>
                            <input type="text" name='instagram' placeholder='Add Instagram'
                            className='p-2 focus:backdrop-blur-md focus:border-fuchsia-400 focus:border rounded-md outline-none w-full md:w-72'
                            />
                        </div>
                        <div className="twitter w-full flex items-center gap-2">
                            <FaXTwitter className='font-bold text-2xl text-blue-400'/>
                             <input type="text" name='twitter' placeholder='Add Twitter/X'
                             className='p-2 focus:backdrop-blur-md focus:border-blue-400 focus:border rounded-md outline-none w-full md:w-72'
                             />    
                        </div>
                        <div className="tiktok w-full flex items-center gap-2">
                            <FaTiktok className='font-bold text-2xl'/>
                            <input type="text" name='tiktok' placeholder='Add Tiktok'
                            className='p-2 focus:backdrop-blur-md focus:border-black focus:border rounded-md outline-none w-full md:w-72'
                             />
                        </div>
                       
                    </div>
                 
                    <div className="personal-details flex flex-col gap-4 md:mx-6 w-full mt-6 md:mt-0">
                        <label htmlFor="username" className='font-bold'>Username:</label>
                        <input type="text" name="username" id="" placeholder='John Doe' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="email" className='font-bold'>Email:</label>
                        <input type="email" name="email" id="" placeholder='johndoe@gmail.com'className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="contact" className='font-bold'>Phone Number:</label>
                        <input type="text" name="contact" id="" placeholder='+254712345678' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="password" className='font-bold'>Password:</label>
                        <input type="password" name='password' placeholder='Update Password' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none' />
                    </div>
                     </div>
                    <div className="bio flex flex-col gap-4 md:mx-6 mt-2 max-w-full">
                        <label htmlFor="bio" className='text-xl font-bold'>About Me:</label>
                        <textarea name="bio" id="bio" placeholder='Write a brief bio about yourself...' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'>
                            
                        </textarea>
                </div>
                <div>
                    <button className='bg-blue-500 py-2 px-4 my-6 md:mx-6 md:my-0 md:mt-2 text-xl text-white rounded-md w-full md:w-60 cursor-pointer'>Update Information</button>
                    <button className='bg-red-500 py-2 px-4 my-6 md:mx-6 md:my-0 md:mt-2 text-xl text-white rounded-md w-full md:w-60 cursor-pointer'>Delete Account</button>
                </div>
                
            </form>
            
        </div>
    </div>
  )
}

export default Profile