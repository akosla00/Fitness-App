import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Activitytrackers from './Activitytarckers';
import { BarChart } from '@mui/x-charts/BarChart';



// const heights = [ 90, 70, 90, 100, 150, 30, 50, 80];

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

 function BasicDateRangeCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar calendars={1}/>
      </DemoContainer>
    </LocalizationProvider>
  );

}
export default function FixedColumns({children}) {
  return (
    <Box sx={{ width: '100%', minHeight: 200 }}>
      <Masonry columns={4} spacing={1}>

        <Activitytrackers key={0} index={0} height={500}
        >
          <BasicDateRangeCalendar sx={{marginRight: "auto", marginLeft:"auto"}} />
          {/* inline style for calender */}
          <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
        </Activitytrackers>


        <Activitytrackers key={0} index={1} height={415}
        >
            {/* pie add color to data objects */}
       <PieChart 
        series={[
          {
            //  
            data: [ { id: 0, value: 10, label: 'Distance' , color: 'red'},
               
              { id: 1, value: 15, label: 'Sleep' },
              { id: 2, value: 20, label: 'Energy Burn ' }, ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          }
        ]}></PieChart>
  </Activitytrackers>


        <Activitytrackers key={0} index={2} height={415}
        >
          <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['bar A', 'bar B', 'bar C'],
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

   

        
        </Activitytrackers>
        {/* {heights.map((height, index) => (
        <Activitytrackers key={index} index={index} height={height}>
          
        </Activitytrackers>
        ))} */}
      </Masonry>
    </Box>
  );
}