import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { Routes, Route, Link } from 'react-router-dom';
import TaskEditModal from './TaskEditModal';

const Task = ({ 
  list,
  task, 
  saved, 
  onCheckTask, 
  onSaveTask, 
  onDeleteTask, 
  handleOpen,
  onEditTask
}) => {
    const [taskEditOpen, setTaskEditOpen] = useState(false);
    const handleTaskEditOpen = () => setTaskEditOpen(true);
    const handleTaskEditClose = () => setTaskEditOpen(false);

    const labelId = `checkbox-list-label-${task.name}`;

    const handleToggleCheck = () => {
      task.status = !task.status
      fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: 'PATCH',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            name: task.name,
            description: task.description,
            saved: task.saved,
            status: task.status
          }),
        })
        .then((r) => r.json())
        .then((checkedTask) => onCheckTask(checkedTask))
    }
 
    const handleTaskSave = () => {
        task.saved = !task.saved
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: 'PATCH',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            name: task.name,
            description: task.description,
            saved: task.saved,
            status: task.status
          }),
        })
        .then((r) => r.json())
        .then((savedTask) => onSaveTask(savedTask))
      }

    const handleTaskDelete = () => {
      fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: 'DELETE'
      })
      .then(onDeleteTask(task))
      .then(handleOpen)
    }

    return (
      <Container key={task.id}>
        <ListItem
          secondaryAction={task.status ?           
            <IconButton edge="end" aria-label="bookmark" onClick={handleTaskDelete}>
              <DeleteIcon />
            </IconButton>
          :
            <IconButton edge="end" aria-label="bookmark" onClick={handleTaskSave} >
              {saved ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
            </IconButton>
          }
          disablePadding
          sx={{ marginTop: "1em", marginBottom: '1em' }}
          >
          <ListItemButton role={undefined} dense >
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={handleToggleCheck}
                checked={task.status}
              />
            </ListItemIcon>
            <ListItemButton component={ Link } to={`${task.list_id}/tasks/edit/${task.id}`} onClick={handleTaskEditOpen}>
              <ListItemText id={labelId} primary={`${task.name}`} secondary={`${task.description}`} />
            </ListItemButton>
          </ListItemButton>
        </ListItem>
        <Routes>
          <Route path={`${task.list_id}/tasks/edit/${task.id}`} element={<TaskEditModal task={task} open={taskEditOpen} setOpen={setTaskEditOpen} handleClose={handleTaskEditClose} onEditTask={onEditTask} />} />
        </Routes>
      </Container>
    );
  }

export default Task;