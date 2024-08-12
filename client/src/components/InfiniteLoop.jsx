import Box from '@mui/material/Box';
import '../assets/css/infiniteLoop.css';
//Import the images
import seatedDumbbellCurl from '../assets/images/seated-dumbbell-curls.png';
import benchPress from '../assets/images/bench-press.png';
import deadLift from '../assets/images/dead-lift.png';
import dumbbellRow from '../assets/images/dumbbell-row.png';
import hipTrust from '../assets/images/hip-trust.png';
import pecFly from '../assets/images/pec-fly.png';
import squat from '../assets/images/squat.png';


function InfiniteLoop () {
    return(
        <Box className="exercise-loop-box">
            <Box className="exercise-loop">
                <img className='image-loop' src={seatedDumbbellCurl} alt="" />
                <img className='image-loop' src={benchPress} alt="" />
                <img className='image-loop' src={deadLift} alt="" />
                <img className='image-loop' src={dumbbellRow} alt="" />
                <img className='image-loop' src={hipTrust} alt="" />
                <img className='image-loop' src={pecFly} alt="" />
                <img className='image-loop' src={squat} alt="" />
            </Box>
            <Box className="exercise-loop">
                <img className='image-loop' src={seatedDumbbellCurl} alt="" />
                <img className='image-loop' src={benchPress} alt="" />
                <img className='image-loop' src={deadLift} alt="" />
                <img className='image-loop' src={dumbbellRow} alt="" />
                <img className='image-loop' src={hipTrust} alt="" />
                <img className='image-loop' src={pecFly} alt="" />
                <img className='image-loop' src={squat} alt="" />
            </Box>
        </Box>
    )
}

export default InfiniteLoop;