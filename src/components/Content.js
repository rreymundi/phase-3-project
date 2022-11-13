import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Home from './Home';
import All from './All';
import Saved from './Saved';

const Content = ({ lists, setLists, onAddTask, onAddList, onSaveTask, savedTasks, setSavedTasks }) => {

    const tasksArrays = lists.map((list) => list.tasks)
    const tasks = tasksArrays.flat(1)

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
                                <Route path='/lists' element={<All lists={lists} setLists={setLists} onAddTask={onAddTask} onAddList={onAddList} onSaveTask={onSaveTask} />} />
                                <Route path='/saved' element={<Saved lists={lists} tasks={tasks} savedTasks={savedTasks} setSavedTasks={setSavedTasks} onSaveTask={onSaveTask} />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}

export default Content