import squat from '../assets/images/squatMan.jpeg'
import '../assets/css/landingpage.css'
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Import the infinite loop
import InfiniteLoop from '../components/InfiniteLoop';


const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 'auto',
    height: 'auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));


function LandingPage () {
    return (
        <div>
            <Box className="hero" 
                sx={{ 
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: "100%",
                bgcolor: "#bfd8ff",
                position: 'relative',
                p: 5
                }}>
                <Box sx={{ width: 600}}>
                    <h1>Get Fit, Get Strong,<br/>Get Healthy with Fit Flex!</h1>
                    <p>Begin your health journey with our fitness tracker and premade workout plans.</p>
                    <button>Start Now</button>
                </Box>
                <Box sx={{position: 'relative'}}>
                    <img className='f-picture' src={squat}/>
                    <DemoPaper id="hero-sign-1" className='clear' variant="elevation">Set Goals!</DemoPaper>
                    <DemoPaper id="hero-sign-2" className='clear' variant="elevation">Workout plans!</DemoPaper>
                    <DemoPaper id="hero-sign-3" className='clear' variant="elevation">Track progress!</DemoPaper>
                </Box>    
            </Box>
            <InfiniteLoop/>
            {/* <Box>
                <Box>
                    <h1>Feature 1 of website</h1>
                </Box>
                <Box>
                    <h1>Feature 2 of website</h1>
                </Box>
                <Box>
                    <h1>Feature 3 of website</h1>
                </Box>
            </Box> */}
        </div>
    )
}

export default LandingPage;