import { useState } from 'react'
import NavBar from './components/navbar'
import FixedColumns from './components/Columns'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import "./app.css"
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <div className="background">
      <div>
        <a href="https://vitejs.dev" target="_blank">
         
        </a>
        <a href="https://react.dev" target="_blank">
         
        </a>
      </div>
      <h1>Rise to the Challenge. Unleash Your Potential</h1>
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
    </>
  )
}

export default App
