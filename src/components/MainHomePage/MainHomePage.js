import React from 'react';

import styles from './MainHomePage.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function MainHomePage(){
    const LearnMoreBtn = styled(Button)({
        backgroundColor: 'hsl(140, 50%, 20%)',
        color: 'white',
        borderRadius: '20px',
        padding: '10px',
        paddingLeft : '30px',
        paddingRight: '30px',
        textTransform: 'none',
        fontSize: '1em',
        fontWeight: 'bold',
        '&:hover' : {
          backgroundColor: 'rgb(45, 30, 22)',
          color: 'white',
      }
      })
    return(
    <section class='main-homepage'>
        <section class='homepage-text-section'>
          <h1 class='main-title'>Shopping And Department Store.</h1>
          <h2 class='main-subtitle'>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</h2>
          <LearnMoreBtn variant='contained'>Learn More</LearnMoreBtn>
        </section>
      </section>
    )
}

export default MainHomePage;