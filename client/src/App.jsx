import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import Auth from './pages/auth'
// import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
