import React from 'react';

import styles from './IconButtons.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';

function IconButtons(){
    const StyledIconButtons = styled(Button)({
        color: 'rgb(45, 30, 22)',
        textTransform : 'none',
        fontWeight: 'bold',
        '&:hover' : {
            color: ' hsl(20, 83%, 40%)'
        },
        zIndex:'0',
    })
    return(
        <section>
            <StyledIconButtons startIcon={<AccountCircle></AccountCircle>}>Account</StyledIconButtons>
            <StyledIconButtons startIcon={<ShoppingCartIcon></ShoppingCartIcon>}>Cart</StyledIconButtons>
        </section>
    )
}

export default IconButtons;