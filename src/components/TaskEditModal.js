import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const TaskEditModal = ({ 
  task, 
  open, 
  handleClose, 
  onEditTask,
}) => {

    let navigate = useNavigate();

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      display: 'flex'
    };
    
    const [formData, setFormData] = useState({
      name: task.name,
      description: task.description
    })
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        [e.target.description]: e.target.value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleClose()
      // navigate("/lists");
      const newTaskData = {
        name: formData.name,
        description: formData.description,
        saved: task.saved,
        status: task.status
        }
      fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newTaskData)
      })
      .then((r) => r.json())
      .then((updatedTask) => onEditTask(updatedTask))
      .then(setFormData({
        name: task.name,
        description: task.description
      }))
    }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center" justify="center" direction="column" >
                <Grid item>
                  <Typography>Edit task</Typography>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="name" name="name" variant="standard" placeholder="Task name" value={formData.name} onChange={handleChange}/>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="description" name="description" variant="standard" placeholder="Task description" multiline maxRows={2} value={formData.description} onChange={handleChange}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit" >Save</Button>
                </Grid>
              </Grid>
            </Box>
    </Modal>
  )
}

export default TaskEditModal;