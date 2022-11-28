import React, { useState } from 'react';
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TaskModal from './TaskModal';
import Task from './Task';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CheckboxList = ({ list, lists, setLists, onAddTask, onCheckTask, onSaveTask }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  return (
    <>
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
          <Typography sx={{ mt: 1, mb: 1 }} variant="h6" component="div">
              {list.name}
            </Typography>
            <Button component={ Link } to={`${list.id}`} onClick={handleOpen}>
              <AddCircleIcon />
            </Button>
            <Routes>
              <Route path={`${list.id}`} element={<TaskModal list={list} open={open} setOpen={setOpen} handleClose={handleClose} onAddTask={onAddTask} />} />
            </Routes>
        </Container>
        {list.tasks?.map((task) => task.status === false ? <Task key={task.id} list={list} setLists={setLists} task={task} saved={task.saved} onCheckTask={onCheckTask} onSaveTask={onSaveTask} /> : null)}
      </Card>
            <Outlet />
    </>
    );
}

export default CheckboxList;