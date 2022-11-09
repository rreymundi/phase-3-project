import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const TaskModal = ({ open, setOpen, handleClose}) => {

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      // border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      display: 'flex'
    };
    
    const [formData, setFormData] = useState({
      name: "",
      description: "",
    })
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = {
        name: formData.name,
        description: formData.description,
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
      // .then(onAddBook)
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
                  <Typography sx={{}}>Add a new task</Typography>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="name" name="name" variant="standard" placeholder="Task name" value={formData.name} onChange={handleChange}/>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="description" name="description" variant="standard" placeholder="Description" value={formData.description} onChange={handleChange} multiline maxRows={2} />
                </Grid>
                <Grid item>
                  <Button color="primary" type="submit">Submit</Button>
                </Grid>
              </Grid>
            </Box>
    </Modal>
  )
}

export default TaskModal