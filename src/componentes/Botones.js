import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained"> Disabled </Button>
      <Button variant="contained" > Link </Button> 
      
      
    </Stack>
  );
}