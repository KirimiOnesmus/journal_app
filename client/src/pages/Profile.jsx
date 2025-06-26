import React, { useEffect, useState } from 'react'
import { FaFacebook,FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/profile.png'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
   const user = JSON.parse(localStorage.getItem('user'));// to fetch user data
    const navigate = useNavigate();
    const id = user?.id;  
    const[userData, setUserData] = useState({
        fullName:' ', 
        userName:'',
        email:'',
        phone_number:'',
        password:'',
        bio:'', 
        facebook_handle:'', 
        tiktok_handle:'',
        instagram_handle: '',
        twitter_handle:''
        });

        useEffect(()=>{
            const fetchUser =async()=>{
                try{
                    const res = await axios.get( `http://localhost:5000/api/users/${id}`);
                    setUserData(res.data);
                    localStorage.setItem('user', JSON.stringify(res.data)); //sync local storage
                }catch(err){
                    console.error("Error fetching user:",err);
                }
            };
            fetchUser();
        },[id]);

        const handleChange = async(e) =>{
            const {name,value}=e.target;

            const updateData ={...userData,[name]:value};
            setUserData(updateData);

            try{
                await axios.put(`http://localhost:5000/api/users/${id}`,updateData);
                localStorage.setItem('user',JSON.stringify(updateData));
            }catch(error){
                console.error('Auto-Update Failed',error);
                toast.error('Auto Update Failed!');
            }
           
        };

        const handleUpdate = async(e)=>{
             e.preventDefault()
            try{
               const res = await axios.put(`http://localhost:5000/api/users/${id}`,userData);
               
                
                toast.success(res?.data?.message || "Profile Updated Successfully");
                setTimeout(()=>{
                    navigate('/dashboard/home');
                }, 1500);
            }catch(err){
                console.error("Update failed:",err);
                toast.error("Failed  to Update Profile.")
            }
        }
        const handleDelete =async()=>{
            if(window.confirm("Are you sure you want to delete your account?")){
                try{
                    await axios.delete(`http://localhost:5000/api/users/${id}`);
                    toast.warn("Account deleted successfully.");
                    navigate('../../login');
                }catch(err){
                    console.error('Deletion failed:',err);
                    toast.error("Account Deletion Failed. Try again Later")
                }
            }
        }

  return (
    <div className='flex flex-col min-h-screen 0 w-full'>
        <div className="  px-4 md:px-8 py-4 rounded-lg  w-full max-w-5xl mx-auto mt-4">
            <h2 className='text-3xl font-bold'>Profile Update</h2>
            <form action="">
                <div className='md:flex md:mx-4 mt-2 justify-between'>
    
                    <div className="socials flex flex-col gap-4 mt-6 w-full md:w-lg md:m-4">
                         <div className="avatar flex items-center justify-center mb-4 ">
                            <img src={profile} alt="Profile" className=' cursor-pointer text-center w-24 h-24 rounded-full shadow-md'/>
                            
                         </div>
                        
                        <div className="facebook w-full flex items-center gap-2">
                            <FaFacebook className='font-bold text-2xl text-blue-600'/>
                            <input type="text" name='facebook_handle' 
                            value={userData.facebook_handle || ''}
                            onChange={handleChange}
                            placeholder='Add Facebook' 
                            className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none w-full md:w-72'/>
                        </div>
                        <div className="instagram w-full flex items-center gap-2">
                            <FaInstagram className='font-bold text-2xl text-fuchsia-400'/>
                            <input type="text" name='instagram_handle'
                            value={userData.instagram_handle || ''}
                            onChange={handleChange}
                             placeholder='Add Instagram'
                            className='p-2 focus:backdrop-blur-md focus:border-fuchsia-400 focus:border rounded-md outline-none w-full md:w-72'
                            />
                        </div>
                        <div className="twitter w-full flex items-center gap-2">
                            <FaXTwitter className='font-bold text-2xl text-blue-400'/>
                             <input type="text" name='twitter_handle' 
                             value={userData.twitter_handle || ''}
                             onChange={handleChange}
                             placeholder='Add Twitter/X'
                             className='p-2 focus:backdrop-blur-md focus:border-blue-400 focus:border rounded-md outline-none w-full md:w-72'
                             />    
                        </div>
                        <div className="tiktok w-full flex items-center gap-2">
                            <FaTiktok className='font-bold text-2xl'/>
                            <input type="text" name='tiktok_handle'
                            value={userData.tiktok_handle || ''}
                            onChange={handleChange}
                             placeholder='Add Tiktok'
                            className='p-2 focus:backdrop-blur-md focus:border-black focus:border rounded-md outline-none w-full md:w-72'
                             />
                        </div>
                       
                    </div>
                 
                    <div className="personal-details flex flex-col gap-4 md:mx-6 w-full mt-6 md:mt-0">
                        <label htmlFor="username" className='font-bold'>Username:</label>
                        <input type="text" name="userName" id="" placeholder='John'
                            value={userData.userName || ''}
                            onChange={handleChange}
                         className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="name" className='font-bold'>Full Name:</label>
                        <input type="text" name="fullName" id="fullName" placeholder=' John Doe'
                            value={userData.fullName}
                            onChange={handleChange || ''}
                         className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="email" className='font-bold'>Email:</label>
                        <input type="email" name="email" id="email"
                            value={userData.email}
                            onChange={handleChange || ''}
                         placeholder='johndoe@gmail.com'className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="contact" className='font-bold'>Phone Number:</label>
                        <input type="text" name="phone_number" id="phone"
                            value={userData.phone_number}
                            onChange={handleChange || ''}
                         placeholder='+254712345678' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'/>
                        <label htmlFor="password" className='font-bold'>Password:</label>
                        <input type="password" name='password'
                         value={userData.password}
                         onChange={handleChange || ''}
                         placeholder='Update Password' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none' />
                    </div>
                     </div>
                    <div className="bio flex flex-col gap-4 md:mx-6 mt-2 max-w-full">
                        <label htmlFor="bio" className='text-xl font-bold'>About Me:</label>
                        <textarea name="bio" 
                        value={userData.bio} onChange={handleChange || ''}
                        id="bio" placeholder='Write a brief bio about yourself...' className='p-2 focus:backdrop-blur-md focus:border-blue-500 focus:border rounded-md outline-none'>
                            
                        </textarea>
                </div>
                <div>
                    <button 
                    type='button'
                    onClick={handleUpdate} 
                    className='bg-blue-500 py-2 px-4 my-6 md:mx-6 md:my-0 md:mt-2 text-xl text-white rounded-md w-full md:w-60 cursor-pointer'
                    >Update Information</button>
                    <button 
                    type='button'
                    onClick={handleDelete}
                    className='bg-red-500 py-2 px-4 my-6 md:mx-6 md:my-0 md:mt-2 text-xl text-white rounded-md w-full md:w-60 cursor-pointer'
                    >Delete Account</button>
                </div>
                
            </form>
            
        </div>
    </div>
  )
}

export default Profile