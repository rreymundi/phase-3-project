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

const Task = ( task ) => {
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(false);

  const labelId = `checkbox-list-label-${task.name}`
  
  const handleToggleCheck = () => {
    setChecked(!checked);
  };

  const handleToggleSave = () => {
    setSaved(!saved)
  }

        return (
          <Container>
            <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={handleToggleSave} >
                {saved ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
              </IconButton>
            }
            disablePadding
            sx={{ marginBottom: '2em' }}
            >
            <ListItemButton role={undefined} onClick={handleToggleCheck} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.id} />
            </ListItemButton>
          </ListItem>
          </Container>
        )
    }

export default Task;