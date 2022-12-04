import React from 'react'
import { Container, Typography } from '@mui/material'
import { Card } from '@mui/material';
import Task from './Task';

const Saved = ({ 
  lists,
  tasks,
  onAddTask,
  onAddList,
  onCheckTask,
  onSaveTask, 
  savedTasks,
  setSavedTasks,
  onEditTask 
}) => {
  const mySavedTasks = tasks.map((task) => {
    if (task.saved && task.status === false) {
      return <Task key={task.id} task={task} saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} onEditTask={onEditTask} />
    } else { 
      return null
    }
  })
  
  return (

    <div>
      <Container sx={{ marginBottom: '32px'}}>
        <Typography variant='h3' sx={{ color: '#1976d2'}}>Important tasks</Typography>  
      </Container>
      <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
        <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
          {mySavedTasks}
        </Card>
      </Container>
    </div>

  )
}

export default Saved;