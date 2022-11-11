import React, { useState } from 'react';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TaskModal from './TaskModal';
import Task from './Task';

const CheckboxList = ({ list, onAddTask }) => {
  const [saved, setSaved] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {list.name}
            </Typography>
            <Button onClick={handleOpen}>Add</Button>
            <TaskModal list={list} open={open} setOpen={setOpen} handleClose={handleClose} onAddTask={onAddTask} />
        </Container>
        {list.tasks?.map((task) => <Task key={task.id} task={task} saved={saved} setSaved={setSaved} />)}
      </Card>
    );
}

export default CheckboxList;