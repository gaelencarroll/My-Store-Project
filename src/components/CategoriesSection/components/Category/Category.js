import React from 'react';

import styles from './Category.css';

function Category( {categoryName, categoryImg} ){
    const categoryStyle = {
        backgroundImage: `url(${categoryImg})`,
        height: '270px',
        width: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
    }
    return(
        <section className='category-section' style={categoryStyle}>
            <p className='category-header'>{categoryName}</p>
        </section>
    )
}

export default Category;