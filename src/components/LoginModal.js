import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const LoginModal = ({ open, setOpen, handleClose, onAddList}) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState([])


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
      something: ""
    })
    
    const handleChange = (e) => {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      })
      console.log(loginData)
    }
  
    // const handleSubmit = (e) => {
    //  setOpen(false);
    //   e.preventDefault();
    //   const newList = {
    //     name: formData.name,
    //     }
    //   fetch("http://localhost:9292/lists", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(newList)
    //   })
    //   .then((r) => r.json())
    //   .then(onAddList)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/login`)
        .then((r) => r.json())
        .then((data) => console.log(data));
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
                  <Typography >Log in</Typography>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="username" name="username" variant="standard" placeholder="username" value={formData.username} onChange={handleChange}/>
                </Grid>
                <Grid item>
                  <TextField required={ true } id="password" name="password" variant="standard" placeholder="password" value={formData.password} onChange={handleChange}/>
                </Grid>
                <Grid item>
                    <Button color="primary" type="submit">Submit</Button>
                </Grid>
              </Grid>
            </Box>
    </Modal>
  )
}

export default LoginModal