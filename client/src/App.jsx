import { Outlet } from 'react-router-dom';
// import { useState } from 'react'
// import Auth from './pages/auth'
// import './App.css'
import Navbar from './components/navbar.jsx';
import LoginProvider from './utils/LoginContext.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <LoginProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </LoginProvider>
    </>
  );
}

export default App