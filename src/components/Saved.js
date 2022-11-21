import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListModal from './ListModal';
import { Card } from '@mui/material';
import Task from './Task';

const Saved = ({ lists, onAddTask, onAddList, onCheckTask, onSaveTask, savedTasks, setSavedTasks, tasks }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const mySavedTasks = tasks.map((task) => {
    if (task.saved && task.status === false) {
      return <Task key={task.id} task={task} saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} />
    }
  })
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>Important tasks</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        {mySavedTasks}
        </Card>
    </Container>
    </>
  )
}

export default Saved;