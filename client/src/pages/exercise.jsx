import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

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
            {exerciseData.map(({ name, description }) => {
                return (
                    <Card key={name} sx={{ maxWidth: 275 }}>
                        <Typography sx={{ fontSize: 26 }}>{name}</Typography>
                        <p>{description}</p>
                    </Card>
                )
            })}
        </div>
    )
}

export default Exercises;