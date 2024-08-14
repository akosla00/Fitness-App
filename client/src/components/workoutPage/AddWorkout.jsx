import {useState, Fragment} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box, Slider, Stack} from '@mui/material';

// import child components
import MultipleSelect from './ExerciseMultiSelect';
import DateTime from './DateTime';


function valuetext(value) {
  return `${value} sets`;
}

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        + Add Workout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log(formData)
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson)
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
            />
          </Box>

          <Box display="flex">
            <Box>
              <Typography gutterBottom>Start Time</Typography>
              <DateTime label={"Start time"}/>
            </Box>

            <Box>
              <Typography gutterBottom>End Time</Typography>
              <DateTime label={"End time"}/>
            </Box>
          </Box>
          
          <Box>
            <Typography gutterBottom>Exercises</Typography>
            <MultipleSelect />
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