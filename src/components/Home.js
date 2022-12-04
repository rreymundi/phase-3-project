import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <Container sx={{ width: '100%', opacity: 1 }}>
            <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&w=1000&q=80" alt="listit home" />
          </Container>
          <Container sx={{ position: 'absolute', top: '15%', left: '25%', transform: 'translate(-50%, -50%)' }} >
            <Typography variant='h1' sx={{ width: '100%' }}>LIST.IT</Typography>
            <Typography variant='h8' sx={{ width: '100%' }}>your personal task management tool</Typography>
          </Container>
      </Container>
  )
}

export default Home