import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center h-full p-6'>
      <h1 className='text-xl'>Welcome Back <span className='text-2xl font-bold text-blue-400'>John Doe</span>! What's on your mind today ?</h1>
      <p className='text-lg italic mt-2'>"Start your day by writing down your thoughts, feelings, or anything you want to remember."</p>
      <div className='flex m-4 w-full gap-4 shadow-md '>
        <h4 className='text-xl font-semibold'>Mood Insights</h4>
        <div className="graph">

        </div>

      </div>
      <div className='flex m-4 w-full gap-4 '>
        <div className='flex m-4 w-full gap-4 shadow-md px-4'>
          <h4 className='text-xl font-semibold'>Recent Entries</h4>
          <div className="entries">
            {/* Recent entries will be displayed here */}
          </div>
        </div>
        <div className='flex m-4 w-full gap-4 shadow-md px-4'>
          <h4 className='text-xl font-semibold'>Calendar</h4>
          <div className="reminders">
            {/* Upcoming reminders will be displayed here */}
          </div>
          </div>
      </div>


    </div>
  )
}

export default Home