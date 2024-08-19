import {useState, useEffect, Fragment} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box, Slider, Stack} from '@mui/material';
import dayjs from 'dayjs';

// import child components
import MultipleSelect from './ExerciseMultiSelect';
import DateTime from './DateTime';

import { addWorkout, getMe } from '../../utils/API';
import Auth from '../../utils/auth';


function valuetext(value) {
  return `${value} sets`;
}

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());
  const [exercises, setExercises] = useState([]);
  const [exerciseId, setExerciseId] = useState([]);
  const [numOfSets, setNumOfSets] = useState(0);
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;
  const getUserData = async () => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }

      const response = await getMe(token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const user = await response.json();
      console.log(user)
      setUserData(user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

    getUserData();
  }, [userDataLength]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const formData = {
      name: nameInput,
      start_time: startTime,
      end_time: endTime,
      exercises: exerciseId,
      sets: numOfSets,
      user_id: userData._id
    }

    console.log(formData);
    try {
      const response = await addWorkout(formData, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const workout = await response.json();

      setUserData(workout);
      console.log(workout)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
      }}>
        <Button id='add-button' onClick={handleClickOpen}>
          Add a Workout
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleSubmit();
            handleClose();
          },
        }}
      >
        <DialogTitle variant="h4">Add Workout</DialogTitle>
        <DialogContent>
          <Box>
            <Typography gutterBottom>Name</Typography>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              type="name"
              fullWidth
              variant="standard"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </Box>

          <Box display="flex">
            <Box>
              <Typography gutterBottom>Start Time</Typography>
              <DateTime label={"Start time"} state={startTime} setState={(e) => setStartTime(e.target.value)}/>
            </Box>

            <Box>
              <Typography gutterBottom>End Time</Typography>
              <DateTime label={"End time"} state={endTime} setState={(e) => setEndTime(e.target.value)}/>
            </Box>
          </Box>
          
          <Box>
            <Typography gutterBottom>Exercises</Typography>
            <MultipleSelect state={exercises} setState={
                (e, obj) => {setExercises(e.target.value)
                
                const key = obj.key.replace(".$", "");

                if (exerciseId.includes(key)) {
                  setExerciseId(exerciseId.filter((exercise) => key !== exercise))
                } else {
                  setExerciseId([...exerciseId, key])}
                }
              }/>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom>Number of Sets</Typography>
            <Slider
              aria-label="Sets"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={1}
              marks
              min={0}
              max={20}
              value={numOfSets}
              onChange={(e) => setNumOfSets(e.target.value)}
            />
          </Box>

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}