import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import clsx from 'clsx';
import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  items: string[];
  setItem: (_value: string) => void;
  item: string;
  className?: string;
};

export default function ComboBox({ items, setItem, item, className }: Props) {
  const classNames = clsx(className);

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <FormControl
      className={classNames}
      sx={{
        minWidth: 160,
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#141d1a',
          color: 'white',
          '& fieldset': { border: 'none' },
          '&:hover fieldset': { border: 'none' },
          '&.Mui-focused fieldset': { border: 'none' },
        },
        '& .MuiSelect-icon': {
          color: 'white',
        },
      }}
      size="small"
    >
      <Select
        id="demo-select-small"
        value={item}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>All Categories</span>;
          }
          return selected;
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#141d1a',
              color: 'white',
              '& .MuiMenuItem-root': {
                color: 'white',
              },
              '& .MuiMenuItem-root:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              },
            },
          },
        }}
      >
        <MenuItem value="">
          <em>All Category</em>
        </MenuItem>

        {items.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
