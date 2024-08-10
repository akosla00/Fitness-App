import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme}) => ({
    backgroundColor: '#808080', // Set background color to gray
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Activitytrackers(props) {
  return (
    <Item sx={{ height: `${props.height }px` }}>
    <div> Actvity {props.index + 1}</div>
    {props.children}
  </Item>
  );
}
export default Activitytrackers;