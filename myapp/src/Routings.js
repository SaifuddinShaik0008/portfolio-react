import React from 'react'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Admin from './Admin/Admin'
import Admindashboard from './Admin/Admindashboard'

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Work" element={<Work/>} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Admindashboard" element={<Admindashboard />} />

        </Routes>
    </div>
  )
}

export default Routings