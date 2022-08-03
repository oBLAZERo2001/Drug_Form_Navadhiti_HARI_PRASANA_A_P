import React from 'react';
import { Box, InputLabel, Select, MenuItem } from '@mui/material';

export default function DropDown({
  label,
  items,
  _key,
  isRequired,
  isReadonly,

  changeResult,
  result,
}) {
  return (
    <Box>
      <InputLabel
        id="demo-simple-select-filled-label"
        InputProps={{
          readOnly: isReadonly,
        }}
      >
        {label}
      </InputLabel>
      <Select
        sx={{ minWidth: 120 }}
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={result?.[_key] && result?.[_key]}
        label={label}
        required={isRequired}
        InputProps={{
          readOnly: isReadonly,
        }}
        onChange={(e) => {
          console.log(_key, e.target.value);
          changeResult(_key, e.target.value);
        }}
      >
        {items?.length > 0 &&
          items.map((item) => (
            <MenuItem key={item.text} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
}
