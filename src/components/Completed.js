import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListModal from './ListModal';
import { Card } from '@mui/material';
import Task from './Task';

const Completed = ({ lists, setLists, onAddTask, onAddList, onCheckTask, onSaveTask, savedTasks, setSavedTasks, tasks, onDeleteTask }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const myCompletedTasks = tasks.map((task) => {
    if (task.status) {
      return <Task key={task.id} task={task} lists={lists} setLists={setLists}  saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} onDeleteTask={onDeleteTask} />
    }
  })
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>Completed tasks</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        {myCompletedTasks}
        </Card>
    </Container>
    {/* <Button variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
      <AddIcon />
    </Button>
    <ListModal open={open} setOpen={setOpen} handleClose={handleClose} onAddList={onAddList} />  */}
    </>
  )
}

export default Completed;