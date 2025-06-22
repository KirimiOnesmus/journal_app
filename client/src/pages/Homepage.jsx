import React from 'react'
import{Header} from '../components'
import Journaling from '../assets/Journaling.jpg'

const Homepage = () => {
  return (
    <div className=' flex flex-col'>
      <div>
        <Header/>
      </div>
      <div className='flex justify-between items-center min-h-screen gap-6 w-full'>
        <div className='flex flex-col justify-center items-start  text-center p-8 w-full'>
          <h2 className='w-full text-5xl px-50 font-bold py-10'>Write it. <span className='text-6xl text-blue-300'>Feel it.</span> Heal it.</h2>
          <p className='w-full text-2xl py-4'>A private journal with mood tracking and an AI that actually listens you.</p>
          <div className='w-full flex flex-col items-center justify-center'>
               <button 
                className='bg-blue-400 text-white px-8 py-3 rounded-lg transition duration-200 flex items-center mt-10 cursor-pointer'
                onClick={() => window.location.href = '/register'}>
               Start Journaling
              </button>
          </div>
 
        </div>
        <div className='flex flex-col items-center justify-center mt-10  '>
          <img src={Journaling} alt="Journaling Illustartion" className='rounded-full mr-20 mt-10 ' />
        </div>

      </div>

    </div>
  )
}

export default Homepage