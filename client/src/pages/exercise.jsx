import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

// Import styling css
import '../assets/css/exerciseAndWorkout.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const getExerciseData = async () => {
    const data = await fetch('/api/exercises', {
        method: 'GET',
    });
    return data;
}

const postExerciseData = async (userData) => {
    const data = await fetch('/api/exercises', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
};

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);
    const [userFormData, setUserFormData] = useState({ name: '', description: '', type: '', difficulty: '', muscle: '' });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function useTheUseState() {
        const data = await getExerciseData();
        const response = await data.json();
        setExerciseData(response);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        // console.log(userFormData);
      };

    const handleSubmitExercise = async (event) => {
        event.preventDefault();

        try {
            const response = await postExerciseData(userFormData);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }

        setUserFormData({ name: '', description: '', type: '', difficulty: '', muscle: '' });

        window.location.reload();
    };

    useEffect(() => {
        useTheUseState();
    }, [])

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
        },
    }))




    return (
        <Box id="exercise-page" sx={{
            height: '100%'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <h1>Exercise List</h1>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box component="form" sx={style}>
                            <Typography sx={{ fontSize: 26 }}>Enter a New Exercise</Typography>
                            <FormControl fullWidth>
                                <TextField name='name' value={userFormData.name} onChange={handleInputChange} id="exerciseName" label="Exercise Name" variant="outlined" />
                                <TextField name='description' value={userFormData.description} onChange={handleInputChange} id="exerciseDescription" label="Exercise Description" variant="outlined" />
                                <TextField name='muscle' value={userFormData.muscle} onChange={handleInputChange} id="exerciseMuscleGroup" label="Muscle Group" variant="outlined" />
                                <Select
                                    labelId="exerciseDifficultyLabel"
                                    id="exerciseDifficulty"
                                    name='difficulty'
                                    value={userFormData.difficulty}
                                    label=''
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                    <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                    <MenuItem value={'Advanced'}>Advanced</MenuItem>
                                </Select>
                                <Select
                                    labelId="exerciseTypeLabel"
                                    id="exerciseType"
                                    name='type'
                                    value={userFormData.type}
                                    label="Exercise Type"
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={'Strength'}>Strength</MenuItem>
                                    <MenuItem value={'Cardio'}>Cardio</MenuItem>
                                    <MenuItem value={'Recovery/Mobility'}>Recovery/Mobility</MenuItem>
                                </Select>
                                <Button onClick={handleSubmitExercise} type='submit' size="large">Submit New Exercise</Button>
                            </FormControl>
                        </Box>
                    </Modal>
                </div>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Button id='add-button' onClick={handleOpen}>Add an Exercise</Button>
            </Box>
            <Gridbox sx={{
                display: 'grid'
            }}>
                                {exerciseData.map(({ _id, name, muscle }) => {
                    return (
                        <Card key={name} sx={{ 
                            Width: 500,
                            height: 150,
                            m: 3,
                            bgcolor: '#f2f2f2',
                            }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 30 }}>{name}</Typography>
                                <Typography sx={{ fontSize: 20 }}>{muscle}</Typography>
                                <a href={`/exercises/${_id}`}><Button size="small">Learn More</Button></a>
                            </CardContent>
                        </Card>
                    )
                })}
            </Gridbox>
        </Box>
    )
}

export default Exercises;