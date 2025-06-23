import React from 'react'

const Register = () => {
  return (
    <div className='flex items-center justify-around min-h-screen bg-linear-to-r from-cyan-400 to-blue-100 w-full mx-0'>
      <div className='md:flex md:items-center md:justify-around w-full md:mx-20 md:bg-white/30 backdrop-blur-none md:backdrop-blur-md p-8 rounded-lg shadow-none md:shadow-lg'>
        <div className="banner hidden md:flex flex-col mx-0 md:mx-30 gap-5  md:text-left">
          <p className='uppercase text-2xl font-bold'>join for <span className='text-blue-600'>free</span></p>
          <h1 className='text-5xl font-semibold'>Start your journey to a clearer mind.</h1>
          <p className='italic text-xl text-gray-500'>"Your private journal, one entry at a time"</p>
          <button className='text-left text-blue-500 border max-w-fit py-2 px-4 rounded-full font-medium text-lg cursor-pointer'
          onClick={() => window.location.href = '/'}>Learn More</button>
        </div>
        <form action="" className='flex flex-col items-center justify-center  p-10 rounded-lg w-full max-w-md gap-4'>
          <h1 className='mb-8 text-3xl font-bold text-left'>Create New Account <span className='text-blue-600'>.</span></h1>
          <input type="text" name="fullName" id="" placeholder='Your Name' className=' w-92 p-2 rounded-lg shadow-lg bg-white/30 outline-none focus:border border-blue-500'/>
          <input type="text" name="username" id="" placeholder='Username' className='  w-92 p-2 rounded-lg shadow-lg bg-white/30 outline-none focus:border border-blue-500'/>
          <input type="email" name="email" id="" placeholder='Your Email' className='  w-92 p-2 rounded-lg shadow-lg bg-white/30 outline-none focus:border border-blue-500'/>
          <input type="password" name="password" id="" placeholder='Password' className=' w-92 p-2 rounded-lg shadow-lg bg-white/30 outline-none focus:border border-blue-500'/>
          <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' className=' w-92 p-2 rounded-lg shadow-lg bg-white/30 outline-none focus:border border-blue-500'/>
          
          <p className='text-right w-full'>Already a member? <a href="./login" className='text-blue-500'>Login</a></p>
          <button type="submit" className=' bg-blue-600 w-92 p-2 rounded-lg text-white text-xl cursor-pointer font-medium'
          onClick={() => window.location.href = './'}
          >Create Account</button>
          
        </form>
      </div>
    </div>
  )
}

export default Register