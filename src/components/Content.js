import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ListsPage from './ListsPage';
import Starred from './Starred';

const drawerWidth = 240

const Content = () => {
  return (
        <Box
            component='main'
            sx={{
                height: '100vh',
                width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                overflow: 'auto',
            }}>
            <Toolbar />
            <Container maxWidth='xl' sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className='container-paper' sx={{ height: '80vh' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/lists' element={<ListsPage />} />
                        <Route path='/saved' element={<Starred />} />
                    </Routes>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
        </Box>
  )
}

export default Content