import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListModal from './ListModal';

const All = ({ lists, setLists, onAddTask, onAddList, onCheckTask, onSaveTask }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderedLists = lists?.map((list) => <CheckboxList key={list.id} lists={lists} list={list} tasks={list.tasks} setLists={setLists} onAddTask={onAddTask} onCheckTask={onCheckTask} onSaveTask={onSaveTask} />)
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>All tasks</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      {renderedLists}
    </Container>
    <Button variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
      <AddIcon />
    </Button>
    <ListModal open={open} setOpen={setOpen} handleClose={handleClose} onAddList={onAddList} /> 
    </>
  )
}

export default All