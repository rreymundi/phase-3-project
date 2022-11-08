import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckIcon from '@mui/icons-material/Check';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>setIsDrawerOpen(true)}
            >
            <MenuIcon />
          </IconButton>
          <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={()=>setIsDrawerOpen(false)}
              onKeyDown={()=>setIsDrawerOpen(false)}
              >
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={ Link } to='/lists'>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText>All</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={ Link } to='/saved'>
                    <ListItemIcon>
                      <BookmarkBorderIcon />
                    </ListItemIcon>
                    <ListItemText>Saved</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PlaylistAddIcon />
                    </ListItemIcon>
                    <ListItemText>New</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ bottom: 0 }}>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText>Log in</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            <Button color='inherit' component={ Link } to='/'>LIST.IT</Button>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar
