import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

import './style.css';

import Form from './components/Form';
import drug1 from './JsonData/drug1';
import drug2 from './JsonData/drug2';

export default function App() {
  const [selectedDrug, setSelectedDrug] = useState('drug1');
  const [result, setResult] = useState({});
  useEffect(() => {
    setResult({});
  }, [selectedDrug]);

  const changeResult = (key, val) => {
    setResult((r) => ({ ...r, [key]: val }));
  };

  console.log(result);

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ m: 1 }}
      >
        <Button
          variant="contained"
          disabled={selectedDrug === 'drug1'}
          onClick={() => {
            setSelectedDrug('drug1');
          }}
        >
          Drug1
        </Button>
        <Button
          variant="contained"
          disabled={selectedDrug === 'drug2'}
          onClick={() => {
            setSelectedDrug('drug2');
          }}
        >
          Drug2
        </Button>
      </ButtonGroup>
      <Form
        Drug={selectedDrug === 'drug1' ? drug1 : drug2}
        result
        changeResult={changeResult}
      />
    </div>
  );
}
