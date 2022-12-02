import React from 'react'
import { Container, Typography } from '@mui/material'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ListModal from './ListModal';

const Lists = ({ 
  lists, 
  setLists, 
  onAddTask, 
  onAddList, 
  onCheckTask, 
  onSaveTask, 
  open, 
  setOpen, 
  handleOpen, 
  handleClose, 
  onEditList
}) => {

  const handleListEdit = (updatedList) => {
    const updatedLists = lists.map((list) =>  
    list.id === updatedList.id ? updatedList : list
    )
    console.log(updatedList)
    setLists(updatedLists)
  }

  const handleListDelete = (deletedList) => {
    const updatedLists = lists.filter((list) => list.id !== deletedList.id)
    setLists(updatedLists)
  }

  const renderedLists = lists?.map((list) => <CheckboxList key={list.id} lists={lists} list={list} tasks={list.tasks} setLists={setLists} onAddTask={onAddTask} onCheckTask={onCheckTask} onSaveTask={onSaveTask} onEditList={handleListEdit} onDeleteList={handleListDelete} />)
  
  return (
    <div>
      <Container sx={{ marginBottom: '32px'}}>
        <Typography variant='h3' sx={{ color: '#1976d2'}}>My lists</Typography>  
      </Container>
      <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
        {renderedLists}
      </Container>
      <Button component={ Link } to="new" variant="contained" onClick={handleOpen} sx={{ borderRadius: '50%', height: '50px', minWidth: '0', position: 'absolute', bottom: 40, right: 60, textAlign: 'center'}}>
        <AddIcon />
      </Button>
      <Outlet />
      <Routes>
        <Route path="new" element={<ListModal open={open} setOpen={setOpen} handleClose={handleClose} onAddList={onAddList} /> } />
      </Routes>
    </div>
  )
}

export default Lists