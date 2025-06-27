import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import{Bar} from 'react-chartjs-2';
import axios from 'axios';
import { data } from 'react-router-dom';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
const Home = () => {
  const user= JSON.parse(localStorage.getItem('user') || '{}');
  const userId = user?.id;
  const [entries,setEntries] = useState([]);

  useEffect(()=>{
    if(!userId) return;

    axios
    .get(`http://localhost:5000/api/entries/user/${userId}`)
    .then(res=>{
      const sorted =res.data.sort(
        (a,b)=> new Date(b.created_at)- new Date(a.created_at)
      );
      setEntries(sorted);
    })
    .catch(err=>console.error('Fetch entries failed',err));
  },[userId]);

  //chart data

  const moodCounts = entries.reduce((acc,e)=>{
    acc[e.mood]=(acc[e.mood] || 0) + 1;
    return acc;
  },{}) || {};

  const moods = Object.keys(moodCounts) || [];
  const counts = Object.values(moodCounts) || [];

  const chartData={
  labels: moods,
  datasets: [
    {
      label: 'Mood Frequency',
      data: counts,
      backgroundColor: moods.map(m => {
        const code = m.charCodeAt(0);
        const hue = (code * 40) % 360;
        return `hsl(${hue}, 70%, 50%)`;
      }),
        barThickness: 20,
        maxBarThickness: 25,
          borderRadius: 5 
    }
  ]
  };

const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Mood Frequency Overview',
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 14 } }
          },
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      };
  const recentEntries = entries.slice(0,5);

  const tileContent=({date,view})=>{
        if (view !== 'month') return null;
        const iso = date.toISOString().split('T')[0];
        const entry = entries.find(e => e.created_at.split('T')[0] === iso);
        return entry ? (
          <div className="mood-emoji text-sm text-center">{entry.mood}</div>
        ) : null;
  }

  return (
    <div className='flex flex-col justify-center h-full p-6 overflow-hidden'>
      <h1 className='text-xl py-6 text-center md:text-left'>Welcome Back <span className='text-2xl font-bold text-blue-400'>{user.fullName}</span>! What's on your mind today ?</h1>
      <p className='text-lg italic mt-2 text-center md:text-left'>"Start your day by writing down your thoughts, feelings, or anything you want to remember."</p>
      <div className='flex-1 m-4 w-full gap-4 shadow-md p-2'>
        <h4 className='text-xl font-semibold mb-2'>Mood Insights</h4>
        <div className="w-full h-48">
            {moods.length > 0 ? (
              <Bar data={chartData}  options={chartOptions}/>
            ) : (
              <p className="italic text-gray-500">No mood data yet. Start by making entries!</p>
            )}

        </div>

      </div>
      <div className='md:flex md:m-4 w-full gap-6 py-4 md:py-0'>
        <div className='w-full md:w-1/2 shadow-md px-4 py-4 rounded-lg bg-white'>
          <h4 className='text-xl font-semibold mb-4'>Recent Entries</h4>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {recentEntries.length > 0 ? (
              recentEntries.map(e => (
                <div
                  key={e.id}
                  className="border rounded-md p-3 bg-gray-50 shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="font-bold">{e.title}</h5>
                      <p className="text-sm text-gray-500">{new Date(e.created_at).toLocaleString()}</p>
                    </div>
                    <div className="text-xl">{e.mood}</div>
                  </div>
                </div>
              ))
            ) : (
              <p className="italic text-gray-500">No entries yet. Add one to see it here.</p>
            )}
          </div>
        </div>
        <div className='home-calendar md:w-1/2 shadow-md p-4 rounded-lg bg-white'>
              <h4 className='text-xl font-semibold mb-2'>Calendar</h4>
              <Calendar
                // className="w-full"
                calendarType="gregory"
                tileContent={tileContent}
                tileClassName={({ date, view }) => {
                  if (view === 'month') {
                    const iso = date.toISOString().split('T')[0];
                    return entries.some(e => e.created_at.split('T')[0] === iso)
                      ? 'mood-day'
                      : '';
                  }
                  return '';
                }}
          
              />
          </div>
      </div>


    </div>
  )
}

export default Home