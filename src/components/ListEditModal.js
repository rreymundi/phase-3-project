import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const ListEditModal = ({ 
  list, 
  open, 
  handleClose, 
  onEditList,
  onDeleteList
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
      name: list.name,
    })
    
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleClose()
      navigate("/lists");
      const newListData = {
        name: formData.name,
        }
      fetch(`http://localhost:9292//lists/${list.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newListData)
      })
      .then((r) => r.json())
      .then((updatedList) => onEditList(updatedList))
      .then(setFormData({
        name: list.name,
      }))
    }

    const handleListDelete = (e) => {
      e.preventDefault()
      fetch(`http://localhost:9292/lists/${list.id}`, {
        method: 'DELETE'
      })
      .then(onDeleteList(list))
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
                  <Typography>Edit list name</Typography>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="name" name="name" variant="standard" placeholder="List name" value={formData.name} onChange={handleChange}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit" >Save</Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="error" type="submit" onClick={handleListDelete} >Delete list</Button>
            </Grid>

              </Grid>
            </Box>
    </Modal>
  )
}

export default ListEditModal