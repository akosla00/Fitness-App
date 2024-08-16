import { useState, useEffect } from "react";
import { getPremadeWorkouts } from "../../utils/API";

import { Typography, Card, CardActions, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';


export default function WorkoutPlans() {
    const [workouts, setWorkouts] = useState([]);
    useEffect(async () => {
        const data = await getPremadeWorkouts();
        setWorkouts(data);
    }, []);
    return (
        <>
            <Typography variant="h4">Try some of our premade workouts!</Typography>
            {workouts.map((workout) => (
                <Card sx={{ maxWidth: 345 }} key={workout._id}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {workout.name}
                        </Typography>
                        <Typography>Included exercises:</Typography>
                        <List>
                            {
                                workout.exercises.map((exercise) => (
                                <ListItem key={exercise._id}>
                                <ListItemText
                                    primary={exercise.name}
                                />
                                </ListItem>
                            ))}
                        </List>
                        <Typography>Number of Sets: {workout.sets}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}