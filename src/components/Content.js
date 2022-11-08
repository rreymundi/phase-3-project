import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import All from './All';
import Starred from './Starred';

// const drawerWidth = 240

const Content = ({ lists }) => {
  return (
        <Box
            component='main'
            sx={{
                height: '100vh',
                // width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
                // ml: { sm: `${drawerWidth}px` },
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
                            <Route path='/lists' element={<All lists={lists} />} />
                            <Route path='/saved' element={<Starred />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Container>
        </Box>
  )
}

export default Content