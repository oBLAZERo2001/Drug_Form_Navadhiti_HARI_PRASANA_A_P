import React from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDate({
  label,
  _key,
  isRequired,
  changeResult,
  result,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={result?.[_key] && result?.[_key]}
        onChange={(e) => {
          changeResult(_key, e);
        }}
        inputFormat="yyyy-MM-dd"
        required={isRequired}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
