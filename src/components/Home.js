import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ position: 'relative', textAlign: 'center', color: '#1976d2'}}>
          <Container sx={{ width: '100%', opacity: 1 }}>
            <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&w=1000&q=80" />
          </Container>
          <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }} >
            <Typography variant='h1' >Welcome to List.it !</Typography>
          </Container>
      </Container>
  )
}

export default Home