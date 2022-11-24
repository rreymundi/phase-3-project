import React from 'react';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Image } from '@mui/icons-material';

const Footer = () => {
    return (
        <Paper sx={{marginTop: 'calc(10% + 60px)',
        width: '100%',
        // position: 'fixed',
        marginTop: 'auto',
        marginBottom: 'auto',
        // bottom: 0,
        width: '100%',
        backgroundColor: '#1976d2',
        }} component="footer" square variant="outlined">
          <Container maxWidth="lg">
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                my:1
              }}
            >
                {/* <div>
                <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
                </div> */}
            </Box>
    
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                mb: 2,
              }}
            >
              <Typography variant="caption" color="white">
                Copyright ©2022. [] Limited
              </Typography>
            </Box>
          </Container>
        </Paper>
      );
}

export default Footer