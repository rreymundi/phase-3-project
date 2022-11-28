import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Home from './Home';
import Lists from './Lists';
import Saved from './Saved';
import Completed from './Completed';
import ListModal from './ListModal';

const Content = ({ lists, setLists, tasks, onAddTask, onAddList, onSaveTask, onCheckTask, savedTasks, setSavedTasks, onDeleteTask }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <Box
                component='main'
                sx={{
                    height: '100vh',
                    overflow: 'auto',
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    overflowX: 'scroll'
                }}>
                <Container maxWidth='xl' sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/lists' element={<Lists lists={lists} setLists={setLists} onAddTask={onAddTask} onAddList={onAddList} onSaveTask={onSaveTask} onCheckTask={onCheckTask} handleOpen={handleOpen} />} >
                                    <Route path="/lists/new" element={<ListModal open={open} setOpen={setOpen} handleClose={handleClose} onAddList={onAddList} /> } />
                                </Route>
                                <Route path='/important' element={<Saved lists={lists} tasks={tasks} savedTasks={savedTasks} setSavedTasks={setSavedTasks} onSaveTask={onSaveTask} onCheckTask={onCheckTask} />} />
                                <Route path='/completed' element={<Completed lists={lists} tasks={tasks} savedTasks={savedTasks} setSavedTasks={setSavedTasks} onSaveTask={onSaveTask} onCheckTask={onCheckTask} onDeleteTask={onDeleteTask} />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}

export default Content