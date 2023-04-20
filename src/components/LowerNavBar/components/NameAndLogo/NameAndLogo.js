import React from 'react';

import styles from './NameAndLogo.css';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';

function NameAndLogo(){

    const ShopcartLogo = styled(StoreTwoToneIcon)({
        color: ' hsl(20, 83%, 40%)',
        height: '2em',
        width: '2em',
    })

    const ShopcartTitle = styled(Typography)({
        color: 'hsl(140, 50%, 20%)',
        fontSize : '1.7em',
        fontWeight : 'bold',
    })
    return(
        <section class='logo-and-name-section'>
            <ShopcartLogo></ShopcartLogo>
            <ShopcartTitle>Shopcart</ShopcartTitle>
        </section>
    )
}

export default NameAndLogo;