import React from 'react';
import LittleDropDown from './components/LittleDropDown';

import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import styles from './TopNavBar.css';
import { styled } from '@mui/material/styles';

const NavBarButton = styled(Button)({
    color: 'white',
    textTransform: 'none',
})

function TopNavBar(){
    return(
        <section className='whole-nav-bar'>
            <NavBarButton variant='text' startIcon={<LocalPhoneIcon/>}>+008605937608</NavBarButton>
            <section className='promo-section'>
                <NavBarButton variant='text'>Get 50% Off on Selected Items</NavBarButton>
                <p className='divider'>|</p>
                <NavBarButton variant='text'>Shop Now</NavBarButton>
            </section>
            <section className='lang-section'>
                <LittleDropDown label='Eng' options={['Bangla','Arabic','Urdu']}/>
                <LittleDropDown label='Location' options={['Dhaka','USA','India']}/>
            </section>
        </section>
    )
}

export default TopNavBar;