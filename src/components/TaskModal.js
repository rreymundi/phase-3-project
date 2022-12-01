import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const TaskModal = ({ 
  list, 
  open, 
  setOpen, 
  handleClose, 
  onAddTask 
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
      name: "",
      description: "",
      list_id: list.id
    })
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setOpen(false);
      navigate("/lists");
      const newTask = {
        name: formData.name,
        description: formData.description,
        list_id: formData.list_id,
        saved: false,
        status: false
        }
      fetch("http://localhost:9292/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newTask)
      })
      .then((r) => r.json())
      .then((newTask) => onAddTask(newTask))
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
                  <Typography>Add a new task</Typography>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="name" name="name" variant="standard" placeholder="Task name" value={formData.name} onChange={handleChange}/>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="description" name="description" variant="standard" placeholder="Description" value={formData.description} onChange={handleChange} multiline maxRows={2} />
                </Grid>
                <Grid item>
                  <Button variant="contained"  color="primary" type="submit">Add</Button>
                </Grid>
              </Grid>
            </Box>
    </Modal>
  )
}

export default TaskModal