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

function Exercises() {
    const [exerciseData, setExerciseData] = useState([]);
    const [formDifficulty, setFormDifficulty] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function useTheUseState() {
        const data = await getExerciseData();
        const response = await data.json();
        setExerciseData(response);
    }

    const handleChange = (event) => {
        setFormDifficulty(event.target.value);
    };

    useEffect(() => {
        useTheUseState();
        setFormDifficulty('Difficulty');
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
                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Exercise Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Exercise Description" variant="outlined" />
                            <TextField id="outlined-basic" label="Muscle Group" variant="outlined" />
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formDifficulty}
                                label="Difficulty"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Beginner</MenuItem>
                                <MenuItem value={20}>Intermediate</MenuItem>
                                <MenuItem value={30}>Advanced</MenuItem>
                            </Select>
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