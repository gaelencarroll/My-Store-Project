import React from 'react';

import styles from './ProductCard.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductCard({imageURL, productName, price, description, ratingValue, numRatings}){
    const FavoriteIconStyled = styled(FavoriteBorderIcon)({
        backgroundColor: 'white', 
        borderRadius: '50%', 
        padding: '7px', 
        position: 'absolute', 
        top:15, 
        right:15,
        '&:hover' : {
            backgroundColor: '#ff6d75',
            cursor: 'pointer',
            color: 'white',
        }
    })
    return(
        <section className='product-card'>
            <section className='product-photo-section'>
                <figure className='product-photo' style={{backgroundImage: `url(${imageURL})`}}></figure>
                <FavoriteIconStyled></FavoriteIconStyled>
            </section>
            <section className='product-description-section'>
                <section className='product-title-section'>
                    <p className='product-name'>{productName}</p>
                    <p className='product-price'>${price}</p>
                </section>
                <p className='product-description-paragraph'>{description}</p>
                <section className='rating-section'>
                    <Rating name="read-only" value={ratingValue} size='small' readOnly sx={{
                        '& .MuiRating-iconFilled': {
                            color: '#ff6d75',
                        }}} />
                    <p className='num-ratings'>({numRatings})</p>
                </section>
                <Button variant='outlined' sx={{color: 'black', borderRadius: '20px', textTransform: 'none', border: '1px solid black', fontWeight: 'bold', padding: '7px', paddingRight: '20px', paddingLeft: '20px'}}>Add to Cart</Button>
            </section>
        </section>
    )
}

export default ProductCard;