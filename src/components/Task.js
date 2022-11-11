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

const Task = ({ task, saved, setSaved }) => {

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
  }

export default Task;