import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { Task } from '@mui/icons-material';

const CheckboxList = ({ list }) => {
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(false)
  const tasks = list.tasks

  return (
      <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
        <Container>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {list.name}
          </Typography>
        </Container>

      {tasks.length === 0 ? 
        <Container>
          <ListItem disablePadding sx={{ marginBottom: '2em' }}>
          <ListItemText primary={`All done!`} />
          </ListItem>
        </Container>
        :
        tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.name}`;

          const handleToggleCheck = () => {
            task.status = !task.status
            setChecked((checked) => !checked)
          }

          const handleSaveClick = () => {
            task.saved = !task.saved
            setSaved((saved) => !saved)
            console.log(task)
          }

          return (
            <Container key={task.id}>
              <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="bookmark" onClick={handleSaveClick} >
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