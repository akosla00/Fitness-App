import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Activitytrackers from './Activitytarckers';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// const heights = [ 90, 70, 90, 100, 150, 30, 50, 80];

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


 function BasicDateRangeCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
    </LocalizationProvider>
  );

  function CreateData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  

}
export default function FixedColumns({children}) {
  return (
    <Box sx={{ width: '100%', minHeight: 200,  }}>
      <Masonry columns={2} spacing={3}  >

        <Activitytrackers key={0} index={0} height={470} 
        >
          <BasicDateRangeCalendar sx={{marginRight: "auto", marginLeft:"auto"}} />
          {/* inline style for calender */}
          <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
        </Activitytrackers>


        <Activitytrackers key={0} index={1} height={410} 
        >
            {/* pie add color to data objects */}
        <PieChart 
            series={[
            {
                //  
                data: [ { id: 0, value: 10, label: 'Distance' , color: 'Green'},
                
                { id: 1, value: 15, label: 'Time' },
                { id: 2, value: 20, label: 'Energy Burn ',color: "red" }, ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
            }
            
            ]}>
        </PieChart>
            <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Activitytrackers>
            

        <Activitytrackers key={0} index={2} height={415}
        >
          <BarChart
          
  xAxis={[
    {
      id: 'barCategories',
      data: ['Monday', 'Tuesday', 'Wendsday'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [2, 5, 3],
    },
  ]}
  width={500}
  height={300}
/> 
<Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Activitytrackers>


         
{/* this is activity 4 showing a secltion of workouts  */}
        <Activitytrackers key={0} index={3} height={415}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="src/IMG/EXercise.webp" alt="workouts" height={320} />
          </div>
          <Fab color="primary" aria-label="add">
            <AddIcon  />
          </Fab>
        </Activitytrackers>





        

        {/* {heights.map((height, index) => (
        <Activitytrackers key={index} index={index} height={height}>
        
        </Activitytrackers>
        ))} */}
      </Masonry>
    </Box>
  );
}