import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListModal from './ListModal';
import { Card } from '@mui/material';
import Task from './Task';
import DeleteMessageModal from './DeleteMessageModal';

const Completed = ({ lists, setLists, tasks, onAddTask, onAddList, onCheckTask, onSaveTask, savedTasks, setSavedTasks, onDeleteTask }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true)
    setTimeout(handleClose, 1000);
  };

  const myCompletedTasks = tasks.map((task) => {
    if (task.status) {
      return <Task key={task.id} task={task} saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} onDeleteTask={onDeleteTask} handleOpen={handleOpen} />
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
        <DeleteMessageModal open={open} />
    </Container>
    </>
  )
}

export default Completed;