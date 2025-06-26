import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Homepage,Login,Register,Profile,Dashboard } from './pages'
import { Entries,CalendarView,Home } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import emailjs from '@emailjs/browser';
emailjs.init('lrkHLfAW2LrmvcgC0');


function App() {
  return (
  
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="entries" element={<Entries />} />
          <Route path="calendar" element={<CalendarView />} />
           <Route path="profile" element={<Profile/>} /> 
         
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
  
  </>

  )
}

export default App