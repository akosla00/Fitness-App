import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Styled component for the item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white', // Set background color to white
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: '10px', // Add rounded corners
  color: theme.palette.text.secondary,
  display: 'grid',  
}));

// Activitytrackers component to render each activity tracker
function Activitytrackers(props) {
  return (
    <Item sx={{ height: `${props.height}px` }}>
      <div>Activity {props.index + 1}</div>
      {props.children}
    </Item>
  );
}

export default Activitytrackers;