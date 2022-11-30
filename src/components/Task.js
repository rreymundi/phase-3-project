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
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ 
  task, 
  saved, 
  onCheckTask, 
  onSaveTask, 
  onDeleteTask, 
  handleOpen 
}) => {
    const [checked, setChecked] = useState(false)

    const labelId = `checkbox-list-label-${task.name}`;

    const handleToggleCheck = () => {
      task.status = !task.status
      fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: 'PATCH',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            saved: task.saved,
            status: task.status
          }),
        })
        .then((r) => r.json())
        .then(onCheckTask(task))
    }
 
    const handleTaskSave = () => {
        task.saved = !task.saved
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: 'PATCH',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            saved: task.saved,
            status: task.status
          }),
        })
        .then((r) => r.json())
        .then((onSaveTask(task)))
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
          <ListItemText id={labelId} primary={`${task.name}`} secondary={`${task.description}`}/>
        </ListItemButton>
        </ListItem>
      </Container>
    );
  }

export default Task;