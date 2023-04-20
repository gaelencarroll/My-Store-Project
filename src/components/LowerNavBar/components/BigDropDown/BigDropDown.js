import React from 'react';

import styles from './BigDropDown.css';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function BigDropDown(){
    const StyledDropDown = styled(Button)({
        color: 'rgb(45, 30, 22)',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover' : {
            color: 'grey'
        },
    })
    return(
        <section>
            <StyledDropDown endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}>Category</StyledDropDown>
        </section>
    )
}

export default BigDropDown;