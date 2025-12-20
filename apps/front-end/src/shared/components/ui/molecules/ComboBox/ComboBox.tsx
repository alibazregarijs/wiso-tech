import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  items: string[];
};

export default function ComboBox({ items }: Props) {
  const [state, setState] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 160,
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#141d1a',
          color: 'white',
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiSelect-icon': {
          color: 'white',
        },
      }}
      size="small"
    >
      <Select
        id="demo-select-small"
        value={state}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>All Categories</span>;
          }
          return selected;
        }}
        // 👇 ADD THIS PROP TO STYLE THE DROPDOWN LIST
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#141d1a', // Background color
              color: 'white', // Default text color for the menu
              '& .MuiMenuItem-root': {
                color: 'white', // ✅ Make menu item text white
              },
              '& .MuiMenuItem-root:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)', // Optional hover
              },
            },
          },
        }}
      >
        <MenuItem value="">
          <em>All Category</em>
        </MenuItem>

        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
