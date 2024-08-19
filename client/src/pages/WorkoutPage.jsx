import  { Typography } from '@mui/material';

import AddWorkout from '../components/workoutPage/AddWorkout.jsx';
import WorkoutPlans from '../components/workoutPage/WorkoutPlans.jsx';


function WorkoutPage() {
    return (
        <>
            <Typography variant='h3' align='center'>Workouts</Typography>
            <AddWorkout />
            <WorkoutPlans />
        </>
    )
}

export default WorkoutPage;