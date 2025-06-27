
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.css';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entries,setEntries] = useState([]);
  const [ modalEntry, setModalEntry] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const userId = user?.id;


  const formatDate = (date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0]; 
  };


    useEffect(()=>{
      const fetchEntries= async()=>{
        try {
          const res= await axios.get(`http://localhost:5000/api/entries/user/${userId}`);
          const formatted = res.data.map(entry=>({
            ...entry,
            date: formatDate(new Date(entry.created_at)),
          }));
          setEntries(formatted);
        } catch (error) {
          
          console.error('Failed to fetch calendar entries:', error);
        }
      };
      if(userId) fetchEntries();

    },[userId]);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const entry = entries.find(entry => entry.date === formattedDate);
      if (entry) {
        return (
          <div className="flex justify-center items-center  font-bold text-md text-white">
            {entry.mood}
          </div>
        );
      }
    }
    return null;
  };

  const handleDateClick =(date)=>{
    const formatted= formatDate(date);
    const entry = entries.find(e=>e.date === formatted);
    setSelectedDate(date);
    if(entry) setModalEntry(entry);
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Journal Calendar</h2>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
        onClickDay={handleDateClick}
        tileClassName={({ date, view }) => {
            if (view === 'month') {
            const formatted = formatDate(date);
            return entries.find(e => e.date === formatted) ? 'entry-day' : '';
            }
            return '';
        }}
        calendarType="gregory" 
        prevLabel="←"
        nextLabel="→"
        
      />

        {modalEntry && (
        <div className="fixed inset-0 bg-transparent bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
                onClick={() => setModalEntry(null)}
                className="absolute top-5 right-5 font-bold text-blue-600 hover:text-red-500 text-xl hover:cursor-pointer "
            >
                X
            </button>
            <h3 className="text-2xl font-bold mb-2 text-center">{modalEntry.title}</h3>
            <div className='flex justify-between text-xl'>
              <p><strong>Mood:</strong> {modalEntry.mood}</p>
              <p><strong>Date:</strong> {modalEntry.date}</p>
            </div>
            <p className="mt-2 text-gray-600">{modalEntry.content}</p>
            </div>
        </div>
        )}
    </div>
  );
};

export default CalendarView;