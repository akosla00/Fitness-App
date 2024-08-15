import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

function Footer () {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            bgcolor: 'black',
            color: 'white',
        }}>
            <Box>
                <h2>Github links</h2>
                <ul>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                </ul>
            </Box>
            <Box>
                <h2>Maybe something else</h2>
                <ul>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                    <li>Put ur github links here</li>
                </ul>
            </Box>
        </Box>
    )
}

export default Footer