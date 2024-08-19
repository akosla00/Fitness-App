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
                <ul>
                    <li><a href="https://github.com/akosla00">Alec Kosla</a></li>
                    <li><a href="https://github.com/lyoko90210">Daniel Dennis</a></li>
                    <li><a href="https://github.com/Giovanni-Ramirez">Giovanni Ramirez</a></li>
                    <li><a href="https://github.com/kristyyip">Kristy Yip</a></li>
                    <li><a href="https://github.com/SkylerRhys">Skyler Jones</a></li>
                </ul>
            </Box>
        </Box>
    )    
}

export default Footer