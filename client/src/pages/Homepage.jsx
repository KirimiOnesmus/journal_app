import React from 'react'
import{Header, Footer} from '../components'
import Journaling from '../assets/Journaling.jpg'
const features = [
  {
    title: "Daily Journaling",
    description: "Capture your thoughts and feelings every day.",
    icon: "📝"
  },
  {
    title: "Mood Tracking",
    description: "Track your mood over time to see patterns.",
    icon: "😊"
  },
  {
    title: "AI Insights",
    description: "Get personalized insights from your journal entries.",
    icon: "🤖"
  },
  {

    title: "Calendar View",
    description: "See which days you’ve written and how you felt at a glance.",
    icon: "📅",
  },
 {
    
    title: "See Growth",
    description: "Visualize how your emotions have evolved over time.",
    icon: "📊",
  },
{

    title: "Private by Default",
    description: "Your entries are 100% private unless you choose to share them.",
    icon: "🔒",
  }
];
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
          
        <div id='#features' className='py-12 px-4 bg-gray-50 min-h-screen'>
          <h2 className='text-center text-3xl font-bold my-8'>Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-lg hover:bg-blue-300 transition duration-300 hover:cursor-pointer'>
                <span className='text-2xl'>{feature.icon}</span>  
                <div>
                  <h3 className='text-xl font-semibold text-center'>{feature.title}</h3>
                  <p className='text-gray-600 py-2'>{feature.description}</p>
                </div>
                </div>)
            ) } 
          </div>

        </div>
        <div className='min-h-screen bg-gray-100 py-12 px-4'>
          <h2 className='text-center text-3xl font-bold my-6'>Why it Matters</h2>
          <p className='max-w-2xl mx-auto text-center text-lg text-gray-700'>
            Journaling is a powerful tool for self-reflection and emotional well-being. By writing down your thoughts and feelings, you can gain clarity, reduce stress, and improve your mental health. Our app makes it easy to journal daily, track your mood, and get insights into your emotional patterns.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8'>
            <div className='flex flex-col items-center bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-blue-500 font-bold text-3xl py-2'>Emotional Clarity</h2>
              <p>Journaling helps you untangle your thoughts and and understand your emotions. </p>
            </div>
            <div className='flex flex-col items-center bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-blue-500 font-bold text-3xl py-2'>Mental Wellness</h2>
              <p> Mood tracking and AI reflection support  healthier thought patterns and self-awareness.</p>
            </div>
            <div className='flex flex-col items-center bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-blue-500 font-bold text-3xl py-2'>Safe & Secure</h2>
              <p> Your journal is your space-private by default, encrypted and only sharedif you choose.</p>
            </div>
            <div className='flex flex-col items-center bg-white shadow-md rounded-lg p-6'>
              <h2 className='text-blue-500 font-bold text-3xl py-2'>See Your Growth</h2>
              <p> Track how far you’ve come. Journaling helps you notice progress you might otherwise miss.</p>
            </div>
          </div>

        </div>
        <div>
          <Footer/>
          
        </div>

    </div>
  )
}

export default Homepage