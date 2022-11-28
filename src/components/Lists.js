import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link, Outlet } from 'react-router-dom';

const Lists = ({ lists, setLists, onAddTask, onAddList, onCheckTask, onSaveTask, handleOpen }) => {

  const renderedLists = lists?.map((list) => <CheckboxList key={list.id} lists={lists} list={list} tasks={list.tasks} setLists={setLists} onAddTask={onAddTask} onCheckTask={onCheckTask} onSaveTask={onSaveTask} />)
  
  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
      <Typography variant='h3'>My lists</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      {renderedLists}
    </Container>
    <Button component={ Link } to="/lists/new" variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
      <AddIcon />
    </Button>
    <Outlet />
    </>
  )
}

export default Lists