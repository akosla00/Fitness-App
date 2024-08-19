import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const getSingleExerciseData = async (id) => {
    const data = await fetch(`/api/exercises/${id}`, {
        method: 'GET',
    });
    return data;
}

function SingleExercise() {
    const [singleExerciseData, setSingleExerciseData] = useState({});

    const { id } = useParams();

    async function useTheUseState() {
        const data = await getSingleExerciseData(id);
        const response = await data.json();
        setSingleExerciseData(response);
    }

    useEffect(() => {
        useTheUseState();
    }, []);
    
    const { name, description, type, muscle, difficulty, reps } = singleExerciseData;
    
    return (
        <Box sx={{
            bgcolor: '#1c1c1c',
            height: '100vh'
        }}>
            <Box sx={{
                m: 4,
                bgcolor: 'blue'
            }}>
                <Card key={name}>
                    <CardContent>
                        <Typography sx={{ fontSize: 52 }}>{name}</Typography>
                        <Typography sx={{ fontSize: 16 }}>{muscle}</Typography>
                        <Typography sx={{ fontSize: 16, color: 'red' }}>{difficulty}</Typography>
                        <Typography sx={{ fontSize: 24 }}>{description}</Typography>
                        <a href="/exercises"><Button size="small">Back to Exercise List</Button></a>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default SingleExercise;