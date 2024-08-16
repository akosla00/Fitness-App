import Box from '@mui/material/Box';
import '../assets/css/footer.css'

function Footer () {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'black',
            color: 'white',

        }}>
            <Box id="github-links" sx={{
                m: 2,
            }}>
                <h3>Github links</h3>
                    <li>Link your github here</li>
                    <li>Link your github here</li>
                    <li>Link your github here</li>
                    <li>Link your github here</li>
                    <li><a href="https://github.com/lyoko90210">Daniel Dennis's Github</a></li>
            </Box>
        </Box>
    )    
}

export default Footer