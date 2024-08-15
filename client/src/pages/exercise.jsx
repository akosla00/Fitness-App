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

    return (
        <div>
            <h1>Exercise List</h1>
            <div>
                <Button onClick={handleOpen}>Add an Exercise</Button>
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