import { useEffect, useState } from 'react';
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

export default function MultipleSelect({ state, setState }) {
  const [names, setNames] = useState([]);
  const resolveRaceIssue = async () => {
    const data = await getExercises();
    return setNames(data);
  }
  useEffect(() => {
    resolveRaceIssue();
  }, []);
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-name-label">Select option(s)</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={state}
          onChange={setState}
          input={<OutlinedInput label="Select option(s)" />}
          MenuProps={MenuProps}
        >
          {names.map(({ name, _id }) => (
            <MenuItem
              key={_id}
              id={_id}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}