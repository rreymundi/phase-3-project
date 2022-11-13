import React, { useState } from 'react';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TaskModal from './TaskModal';
import Task from './Task';

const CheckboxList = ({ list, lists, setLists, onAddTask, onCheckTask, onSaveTask }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleSaveTask = (savedTask) => {
  //   savedTask.saved = !savedTask.saved
  //   setLists([...lists])
  //   }
  // THIS IS THE START OF MY CHANGE
    
  return (
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {list.name}
            </Typography>
            <Button onClick={handleOpen}>Add</Button>
            <TaskModal list={list} open={open} setOpen={setOpen} handleClose={handleClose} onAddTask={onAddTask} />
        </Container>
        {list.tasks?.map((task) => <Task key={task.id} list={list} setLists={setLists} task={task} saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} />)}
      </Card>
    );
}

export default CheckboxList;