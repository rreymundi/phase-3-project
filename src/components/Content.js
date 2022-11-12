import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Home from './Home';
import All from './All';
import Saved from './Saved';
import { SettingsApplicationsSharp } from '@mui/icons-material';

const Content = ({ lists, setLists, search, onAddTask, onAddList }) => {
    const [checked, setChecked] = useState(false)

    const handleCheckTask = (id) => {

    }

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
                                <Route path='/lists' element={<All lists={lists} search={search} onAddTask={onAddTask} onAddList={onAddList} onCheckTask={handleCheckTask} />} />
                                <Route path='/saved' element={<Saved lists={lists} search={search} />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    )
}

export default Content