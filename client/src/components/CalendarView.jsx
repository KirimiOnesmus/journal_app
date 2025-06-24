
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar-custom.css';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const entries = [
    { date: '2025-06-18', title: 'A Calm Day', mood: '😊', content: 'Felt relaxed and productive.' },
    { date: '2025-06-15', title: 'Overwhelmed', mood: '😔', content: 'Too many tasks, very draining.' }
  ];


  const formatDate = (date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0]; 
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const entry = entries.find(entry => entry.date === formattedDate);
      if (entry) {
        return (
          <div className="flex justify-center items-center mt-1 text-xl">
            {entry.mood}
          </div>
        );
      }
    }
    return null;
  };

//   const selectedEntry = entries.find(entry => entry.date === formatDate(selectedDate));

  //Modal for showing entry details
    const [modalEntry, setModalEntry] = useState(null);

    const handleDateClick = (date) => {
    const formatted = formatDate(date);
    const entry = entries.find(e => e.date === formatted);
    setSelectedDate(date); // still highlight it
    if (entry) setModalEntry(entry);
    };

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
                className="absolute top-5 right-5 text-gray-600 hover:text-red-500 text-xl hover:cursor-pointer "
            >
                X
            </button>
            <h3 className="text-xl font-bold mb-2">{modalEntry.title}</h3>
            <p><strong>Mood:</strong> {modalEntry.mood}</p>
            <p><strong>Date:</strong> {modalEntry.date}</p>
            <p className="mt-2">{modalEntry.content}</p>
            </div>
        </div>
        )}
    </div>
  );
};

export default CalendarView;