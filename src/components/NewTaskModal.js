import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const NewTaskModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
            <TextField required={ true } id="name" name="name" variant="standard" placeholder="Task name" value={formData.name} onChange={handleChange}/>
            <TextField required={ true } id="description" name="description" variant="standard" placeholder="Description" value={formData.description} onChange={handleChange} multiline maxRows={2} />
            <Button color="primary" type="submit">Submit</Button>
        </Box>
        </Modal>
  )
}

export default NewTaskModal