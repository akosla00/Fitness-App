import { useState } from 'react'
import NavBar from './components/navbar'
import FixedColumns from './components/Columns'
import {PieChart } from '@mui/x-charts/PieChart';
import "./app.css"
import { Outlet } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="background">
    <NavBar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
         
        </a>
        <a href="https://react.dev" target="_blank">
         
        </a>
      <div className="center-container">
        <h1>You Are your only competition outdo Yourself</h1>
      </div>
    <Outlet />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      </div>
    </>
  )
}

export default App
