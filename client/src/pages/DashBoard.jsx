// import FixedColumns from "../components/Columns";
import Activitytrackers from '../components/Activitytarckers';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import '../assets/css/dashBoard.css'

// images
import picture from '../assets/images/EXercise.webp';


function BasicDateRangeCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
    </LocalizationProvider>
  );

  // function CreateData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
}

function DashBoard () {
    return (
      <div>
        <Box id="dash-board-box" sx={{ width: '100%', minHeight: 200,  }}>
          <Masonry columns={2} spacing={3}>

            <Activitytrackers key={0} index={0} height={470}>
              <BasicDateRangeCalendar sx={{marginRight: "auto", marginLeft:"auto"}} />
                {/* inline style for calender */}
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Activitytrackers>

            <Activitytrackers key={1} index={1} height={410}>
              {/* pie add color to data objects */}
              <PieChart series={[{

                  data: [ { id: 0, value: 10, label: 'Distance' , color: 'Green'},
                  
                  { id: 1, value: 15, label: 'Time' },
                  { id: 2, value: 20, label: 'workout dificulty ',color: "red" }, ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                  cx: 150,
                  cy: 150,
              }]}>

              </PieChart>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Activitytrackers>

            <Activitytrackers key={2} index={2} height={415}>
              <BarChart xAxis={[
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

            <Activitytrackers key={3} index={3} height={415}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={picture} alt="workouts" height={320} />
              </div>
              <Fab color="primary" aria-label="add">
                <AddIcon  />
              </Fab>
            </Activitytrackers>
            
          </Masonry>
        </Box>
      </div>
    )
}

export default DashBoard;


