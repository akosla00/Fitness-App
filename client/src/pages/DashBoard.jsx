import React, { useState } from 'react';
import Activitytrackers from '../components/Activitytarckers';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import '../assets/css/dashBoard.css';

// images
import picture from '../assets/images/EXercise.webp';

function DashBoard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workoutDialogOpen, setWorkoutDialogOpen] = useState(false);
  const [pieOpen, setPieOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const [pieData, setPieData] = useState([
    { id: 0, value: 10, label: 'Distance', color: 'Green' },
    { id: 1, value: 15, label: 'Time' },
    { id: 2, value: 20, label: 'Workout Difficulty', color: 'Red' },
  ]);
  const [barData, setBarData] = useState([2, 5, 3]);
  const [newPieData, setNewPieData] = useState({ label: '', value: 0, color: '' });
  const [newBarData, setNewBarData] = useState({ day: '', value: 0 });
  const [workoutDetails, setWorkoutDetails] = useState({ date: '', description: '' });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleWorkoutDialogOpen = () => setWorkoutDialogOpen(true);
  const handleWorkoutDialogClose = () => setWorkoutDialogClose(false);

  const handlePieOpen = () => setPieOpen(true);
  const handlePieClose = () => setPieOpen(false);

  const handleBarOpen = () => setBarOpen(true);
  const handleBarClose = () => setBarOpen(false);

  const handlePieChange = (e) => {
    const { name, value } = e.target;
    setNewPieData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleBarChange = (e) => {
    const { name, value } = e.target;
    setNewBarData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddPieData = () => {
    setPieData(prevData => [
      ...prevData,
      { id: prevData.length, ...newPieData }
    ]);
    setNewPieData({ label: '', value: 0, color: '' }); // Reset form
    setPieOpen(false);
  };

  const handleAddBarData = () => {
    setBarData(prevData => {
      const updatedData = [...prevData];
      const index = updatedData.findIndex(item => item.day === newBarData.day);
      if (index >= 0) {
        updatedData[index] = newBarData.value;
      } else {
        updatedData.push(newBarData.value);
      }
      return updatedData;
    });
    setNewBarData({ day: '', value: 0 }); // Reset form
    setBarOpen(false);
  };

  const handleWorkoutInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAddWorkout = () => {
    if (selectedDate) {
      console.log('Workout plan added:', { ...workoutDetails, date: selectedDate.format('YYYY-MM-DD') });
      setWorkoutDetails({ date: '', description: '' }); // Reset form
      setWorkoutDialogOpen(false);
    } else {
      alert('Please select a date.');
    }
  };

  return (
    <div>
      <Box id="dash-board-box" sx={{ width: '100%', minHeight: 200 }}>
        <Masonry columns={2} spacing={3}>

          <Activitytrackers key={0} index={0} height={470}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={handleDateChange} />
            </LocalizationProvider>
            <Fab color="primary" aria-label="add" onClick={handleWorkoutDialogOpen} sx={{ marginTop: 2 }}>
              <AddIcon />
            </Fab>
          </Activitytrackers>

          <Activitytrackers key={1} index={1} height={410}>
            <PieChart
              series={[
                {
                  data: pieData,
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                  cx: 150,
                  cy: 150,
                },
              ]}
            />
            <Fab color="primary" aria-label="add" onClick={handlePieOpen}>
              <AddIcon />
            </Fab>
          </Activitytrackers>

          <Activitytrackers key={2} index={2} height={415}>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['Monday', 'Tuesday', 'Wednesday'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: barData,
                },
              ]}
              width={500}
              height={300}
            />
            <Fab color="primary" aria-label="add" onClick={handleBarOpen}>
              <AddIcon />
            </Fab>
          </Activitytrackers>

          <Activitytrackers key={3} index={3} height={415}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={picture} alt="workouts" height={320} />
            </div>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Activitytrackers>

        </Masonry>
      </Box>

      {/* Workout Plan Modal */}
      <Dialog open={workoutDialogOpen} onClose={handleWorkoutDialogClose}>
        <DialogTitle>Create Workout Plan for this day?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="description"
            label="Workout Description"
            type="text"
            fullWidth
            variant="standard"
            value={workoutDetails.description}
            onChange={handleWorkoutInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleWorkoutDialogClose}>Cancel</Button>
          <Button onClick={handleAddWorkout}>Add Workout</Button>
        </DialogActions>
      </Dialog>

      {/* Pie Chart Modal */}
      <Dialog open={pieOpen} onClose={handlePieClose}>
        <DialogTitle>Add Pie Chart Data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="label"
            label="Label"
            type="text"
            fullWidth
            variant="standard"
            value={newPieData.label}
            onChange={handlePieChange}
          />
          <TextField
            margin="dense"
            name="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
            value={newPieData.value}
            onChange={handlePieChange}
          />
          <TextField
            margin="dense"
            name="color"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            value={newPieData.color}
            onChange={handlePieChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePieClose}>Cancel</Button>
          <Button onClick={handleAddPieData}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Bar Chart Modal */}
      <Dialog open={barOpen} onClose={handleBarClose}>
        <DialogTitle>Add Bar Chart Data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="day"
            label="Day"
            type="text"
            fullWidth
            variant="standard"
            value={newBarData.day}
            onChange={handleBarChange}
          />
          <TextField
            margin="dense"
            name="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
            value={newBarData.value}
            onChange={handleBarChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBarClose}>Cancel</Button>
          <Button onClick={handleAddBarData}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DashBoard;
