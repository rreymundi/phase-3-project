import { Container, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'
import CheckboxList from './CheckboxList'

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
    </>
  )
}

export default All