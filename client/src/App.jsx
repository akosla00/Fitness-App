import { Outlet } from 'react-router-dom';
// import { useState } from 'react'
// import Auth from './pages/auth'
// import './App.css'
import Navbar from './components/Navbar';
import LoginProvider from './utils/LoginContext';

function App() {
  return (
    <>
      <LoginProvider>
        <Navbar />
        <Outlet />
      </LoginProvider>
    </>
  );
}

export default App