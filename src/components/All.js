import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListModal from './ListModal';

const All = ({ lists, search, onAddTask, onAddList }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // const filteredTasks = tasks?.filter((task) => task.name.toLowerCase().includes(search.toLowerCase()))

  const unfilteredLists = lists?.map((list) => <CheckboxList key={list.id} list={list} onAddTask={onAddTask}/>)
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>My Lists</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      {/* {search === "" ? unfilteredLists : filteredTasks} */}
      {unfilteredLists}
    </Container>
    <Button variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
      <AddIcon />
    </Button>
    <ListModal open={open} setOpen={setOpen} handleClose={handleClose} onAddList={onAddList} /> 
    </>
  )
}

export default All