import { Typography, Box, Card, CardActions, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useState, useEffect } from "react";
import { getPremadeWorkouts } from "../utils/API";

import AddWorkout from '../components/workoutPage/AddWorkout.jsx';
import { useLoginContext } from "../utils/LoginContext";

// Import styling css
import '../assets/css/exerciseAndWorkout.css';

function WorkoutPage() {
    const { loggedIn } = useLoginContext();
    const [workouts, setWorkouts] = useState([]);

    const resolveRaceIssue = async () => {
        const data = await getPremadeWorkouts();
        return setWorkouts(data);

    }
   
    useEffect(() => {
        resolveRaceIssue();
    }, []);

    const Gridbox = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)'
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
        [theme.breakpoints.up('xl')]: {
            gridTemplateColumns: 'repeat(4, 1fr)'
        }
    }))

    return (
        <>
            <Box id="exercise-page" sx={{ height: '100%' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <h1>Workouts</h1>
                </Box>
                {loggedIn && <AddWorkout />}

                <h2>Try some of our premade workouts!</h2>
                <Gridbox sx={{
                    display:'grid',
                }}>
                    {workouts.map((workout) => (
                        <Card sx={{ maxWidth: 400, m: 3, bgcolor: '#f2f2f2',}} key={workout._id}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {workout.name}
                                </Typography>
                                <Typography>Included exercises:</Typography>
                                <List>
                                    {
                                        workout.exercises.map((exercise) => (
                                        !exercise.reps ?
                                        <ListItem key={exercise._id}>
                                        
                                        <ListItemText
                                            primary={exercise.name}
                                        />
                                        </ListItem> :
                                        <ListItem key={exercise._id}>
                                        
                                        <ListItemText
                                            primary={exercise.name}
                                            secondary={`Reps: ${exercise.reps}`}
                                        />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography>Number of Sets: {workout.sets}</Typography>
                            </CardContent>
                            {loggedIn && 
                                <CardActions>
                                <Button size="small">Add</Button>
                                </CardActions>
                            }
                        </Card>
                    ))}
                </Gridbox>
            </Box>
        </>
    )
}

export default WorkoutPage;