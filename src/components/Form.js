import React from 'react';
import { FormControl } from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';

import DropDown from './customComponents/dropDown';
import CustomDate from './customComponents/CustomDate';

export default function Form({ Drug, result, changeResult }) {
  return (
    <div>
      {Drug?.fields?.length > 0 &&
        Drug.fields
          .sort((a, b) => a.order - b.order)
          .map((val) => (
            <FormControl key={val.key} sx={{ m: 1, minWidth: 120 }}>
              {val.type === 'dropdown' ? (
                <DropDown
                  {...val}
                  _key={val.key}
                  result
                  changeResult={changeResult}
                />
              ) : val.type === 'date' ? (
                <CustomDate
                  {...val}
                  _key={val.key}
                  result
                  changeResult={changeResult}
                />
              ) : (
                <TextField
                  label={val.label}
                  id="filled-start-adornmentc"
                  variant="filled"
                  required={val.isRequired}
                  type={val.type}
                  value={result?.[val.key] && result?.[val.key]}
                  onChange={(e) => {
                    changeResult(val.key, e.target.value);
                  }}
                  InputProps={{
                    inputProps: { min: 0 },
                    readOnly: val.isReadonly,
                    startAdornment: (
                      <InputAdornment position="start">
                        {val.unit}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </FormControl>
          ))}
    </div>
  );
}
