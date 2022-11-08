import { Container, Typography } from '@mui/material'
import React from 'react'
import CheckboxList from './CheckboxList'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const All = ({ lists }) => {
  const renderedLists = lists.map((list) => <CheckboxList key={list.id} list={list}/>)

  return (
    <>
    <Container sx={{ marginBottom: '32px'}}>
    <Typography variant='h3'>My Lists</Typography>  
    </Container>
    <Container sx={{ display: 'flex', flexWrap: "wrap" }}>
      {renderedLists}
    </Container>
    <Button variant="contained" sx={{ borderRadius: '50%', height: '50px', width: '50px', position: 'absolute', bottom: 40, right: 60, textAlign: 'center', margin: '4px 2px' }}>
      <AddIcon />
    </Button>
    </>
  )
}

export default All