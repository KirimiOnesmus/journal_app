import React from 'react'
// import Login from './pages/Login'
// import Register from './pages/Register'
import {Homepage,Login,Register,Profile,Dashboard } from './pages'
import { Entries,Calendar,Home } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="entries" element={<Entries />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App