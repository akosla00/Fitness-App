import squat from '../assets/images/squatMan.jpeg'
import '../assets/css/landingpage.css'
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Import the infinite loop
import InfiniteLoop from '../components/InfiniteLoop';
import Footer from '../components/Footer';

// Import images
import featurePicture1 from '../assets/images/feature1.jpg'
import featurePicture2 from '../assets/images/feature2.jpg'
import featurePicture3 from '../assets/images/feature3.jpg'

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
                height: "80vh",
                bgcolor: "#bfd8ff",
                position: 'relative',
                }}>
                <Box sx={{ width: 600}}>
                    <h1>Get Fit, Get Strong,<br/>Get Healthy with Fit Flow!</h1>
                    <p>Fit flow is the place to start your fitness journey. Start off with our workout plans or if your more advance then create your own workout plans.</p>
                    <button>Start Now</button>
                </Box>
                <Box sx={{position: 'relative'}}>
                    <img className='f-picture' src={squat}/>
                    <DemoPaper id="hero-sign-1" className='clear' variant="elevation">Set Goals!</DemoPaper>
                    <DemoPaper id="hero-sign-2" className='clear' variant="elevation">Workout plans!</DemoPaper>
                    <DemoPaper id="hero-sign-3" className='clear' variant="elevation">Dashboard!</DemoPaper>
                </Box>    
            </Box>
            <InfiniteLoop/>
            <Box sx={{
                minHeight: '80vh'
            }}>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        m: 3
                    }}>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                        fontSize: 30,
                        fontFamily: "Lexend",
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <h1>Excersices</h1>
                        <p>We have a wide variety of workout plans for you to start your fitness journy.</p>
                    </Box>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                    }}>
                        <img className='feature-pictures' src={featurePicture2} alt="image of a person doing yoga" />
                    </Box>
                </Box>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        m: 3
                    }}>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                    }}>
                        <img className='feature-pictures' src={featurePicture1} alt="image of a person doing yoga" />
                    </Box>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                        fontSize: 30,
                        fontFamily: "Lexend",
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <h1>Dashboard</h1>
                        <p>With our dashboard you can organize your fitness journey. See your last workout. </p>
                    </Box>

                </Box>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        m: 3
                    }}>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                        fontSize: 30,
                        fontFamily: "Lexend",
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <h1>Workout plans</h1>
                        <p>We have workout plans for thoese that don&apos;t know where to start.</p>
                    </Box>
                    <Box sx={{
                        minHeight: 400,
                        maxHeight: 600,
                        minWidth: 300,
                        maxWidth: 450,
                    }}>
                        <img className='feature-pictures' src={featurePicture3} alt="image of a person doing yoga" />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </div>
    )
}

export default LandingPage;