import * as React from 'react';
import styles from './LowerNavBar.css';
import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import IconButtons from './components/IconButtons';
import NameAndLogo from './components/NameAndLogo/NameAndLogo';
import SearchBar from './components/SearchBar';
import BigDropDown from './components/BigDropDown/BigDropDown';


const NavBarBtns = styled(Button)({
    color: 'rgb(45, 30, 22)',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover' : {
        color: 'grey'
    }
})

export default function LowerNavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor : 'white'}}>
        <Toolbar sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <NameAndLogo></NameAndLogo>
          <section className='nav-btns-section'>
            <BigDropDown></BigDropDown>
            <NavBarBtns variant='text'>Deals</NavBarBtns>
            <NavBarBtns variant='text'>What's New</NavBarBtns>
            <NavBarBtns variant='text'>Delivery</NavBarBtns>
          </section>
          <SearchBar></SearchBar>
          <IconButtons></IconButtons>
        </Toolbar>
      </AppBar>
    </Box>
  );
}