import React from 'react'

const Login = () => {
  return (
    <div className=' flex items-center min-h-screen bg-linear-to-r from-cyan-400 to-blue-100'>
            <div className='flex  items-center justify-around md:w-full mx-20 bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg'>
                    
                <div className="header flex flex-col gap-6">
                    <h1 className='text-6xl font-bold mb-6'>Welcome Back !</h1>
                    <span className='border-b-4 w-12 mb-6'></span>
                    <p className='text-gray-500 italic text-xl'>"Your journal missed you. Please enter your details."</p>
                </div> 
                <form className='flex flex-col items-center justify-center backdrop-blur-md bg-white/30  my-20 p-10 rounded-lg shadow-lg w-full max-w-md'> 
                
                    <h1 className='mb-8 text-3xl font-bold'>Sign <span className=' border-b-2 '>in</span></h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className='mb-4 p-2 border border-gray-300 rounded-lg w-80 outline-0 focus:border-blue-400'/>
                <input 
                type="password" 
                className='mb-4 p-2 border border-gray-300 rounded-lg w-80 outline-0 focus:border-blue-400'
                placeholder='Password'
                />
                <div 
                className="forgotpassword flex justify-between items-center w-80 pb-6"
                >
                    <div className="remember flex items-center gap-2">
                        <input type="checkbox" name="remember" id=""  className='cursor-pointer'/><label htmlFor="">Remember me</label>
                    </div>
                    <div className="forgot">
                        <a href="/forgot-password" className='text-blue-500 hover:underline'>Forgot Password?</a>
                    </div>
                    
                </div>
                <button 
                    type="submit" 
                    className='bg-blue-700 text-white px-4 py-2 rounded w-80 hover:bg-blue-600 transition duration-200 hover:cursor-pointer'>
                    Login</button>
                <p className='mt-4 text-gray-600'>Don't have an account? <a href="/register" className='text-blue-500 hover:underline'>Register</a></p>

                </form>
            </div>
            
    </div>
  )
}

export default Login