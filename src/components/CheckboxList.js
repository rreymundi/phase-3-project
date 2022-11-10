import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Container, Input, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TaskModal from './TaskModal';
// import Task from './Task';

const CheckboxList = ({ list, onAddTask }) => {
  const [saved, setSaved] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tasks = list.tasks

  return (
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'baseline'}}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {list.name}
            </Typography>
            <Button onClick={handleOpen}>Add</Button>
            {open ? <TaskModal list={list} open={open} setOpen={setOpen} handleClose={handleClose} onAddTask={onAddTask} /> : null}
        </Container>

      {tasks.length === 0 ? 
        <Container>
          <ListItem disablePadding sx={{ marginBottom: '2em' }}>
          <ListItemText primary={`All done!`} />
          </ListItem>
        </Container>
        :
        // tasks.map((task) => <Task key={task.id} task={task} />)
        tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.name}`;

          const handleToggleCheck = () => {
            task.status = !task.status
            console.log(task)
          }
          
          const handleSaveClick = () => {
            setSaved((saved) => !saved)
            task.saved = !task.saved
            console.log(task)
          }

          const handleTaskUpdate = () => {
            fetch(`http://localhost:9292/tasks/${task.id}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                saved: true/false,
                status: true/false
              }),
            })
            .then((r) => r.json())
            .then()
          }

          return (
            <Container key={task.id}>
              <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="bookmark" onClick={handleSaveClick} >
                  {task.saved ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
                </IconButton>
              }
              disablePadding
              sx={{ marginBottom: '2em' }}
              >
              <ListItemButton role={undefined} dense >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={handleToggleCheck}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${task.name}`} />
              </ListItemButton>
            </ListItem>
            </Container>
          );
        })
      }
    </Card>
  );
}

export default CheckboxList;