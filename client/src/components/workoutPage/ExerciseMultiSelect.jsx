import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getExercises } from '../../utils/API'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = await getExercises();

function getStyles(name, exerciseName, theme) {
  return {
    fontWeight:
      exerciseName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [exerciseName, setExerciseName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setExerciseName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Select option(s)</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={exerciseName}
          onChange={handleChange}
          input={<OutlinedInput label="Select option(s)" />}
          MenuProps={MenuProps}
        >
          {names.map(({name}) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, exerciseName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}