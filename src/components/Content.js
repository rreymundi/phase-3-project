import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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
                    this is where my components go
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
  )
}

export default Content