import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Padding } from '@mui/icons-material';
import ListModal from './ListModal';

const Saved = ({ lists, search }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const renderedLists = lists.map((list) => <CheckboxList key={list.id} list={list} />)
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>Saved Tasks</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      {renderedLists}
    </Container>
    <Button variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
      <AddIcon />
    </Button>
    {open ? <ListModal open={open} setOpen={setOpen} handleClose={handleClose}/> : null}
    </>
  )
}

export default Saved