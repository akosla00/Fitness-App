import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const getExerciseData = async () => {
    const data = await fetch('/api/exercises', {
        method: 'GET',
    });
    return data;
}

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);

    async function useTheUseState() {
        const data = await getExerciseData();
        const response = await data.json();
        setExerciseData(response);
    }

    useEffect(() => {
        useTheUseState();

    }, [])

    return (
        <div>
            <h1>Exercise List</h1>
            {exerciseData.map(({ _id, name, muscle }) => {
                return (
                        <Card key={name} sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 26 }}>{name}</Typography>
                                <Typography>{muscle}</Typography>
                                <a href={`/exercises/${_id}`}><Button size="small">Learn More</Button></a>
                            </CardContent>
                        </Card>
                )
            })}
        </div>
    )
}

export default Exercises;