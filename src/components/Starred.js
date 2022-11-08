import React from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Starred = () => {
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
    <Typography variant='h3'>Saved tasks</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      Your saved tasks go here!
    </Container>
    <Button variant="contained" sx={{ borderRadius: '50%', height: '50px', width: '50px', position: 'absolute', bottom: 40, right: 60, textAlign: 'center', margin: '4px 2px' }}>
      <AddIcon />
    </Button>
    </>
  )
}

export default Starred