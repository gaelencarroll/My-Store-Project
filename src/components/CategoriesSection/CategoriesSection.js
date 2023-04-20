import React from 'react';

import styles from './CategoriesSection.css';
import Category from './components/Category/Category'

function CategoriesSection(){
    const categoriesInfo = [
        {
          name : 'Furniture',
          imageURL : '/images/furniture.jpg',
        },
        {
          name : 'Hand Bag',
          imageURL : '/images/handbags.jpg',
        },
        {
          name : 'Books',
          imageURL : '/images/books.jpg',
        },
        {
          name : 'Tech',
          imageURL : '/images/technology.jpg',
        },
        {
          name : 'Sneakers',
          imageURL : '/images/sneakers.jpg',
        },
        {
          name : 'Travel',
          imageURL : '/images/travel.jpg',
        },
      ]
    
    return(
    <section class='categories-section'>
        <h3 class='categories-title'>Shop Our Top Categories</h3>
        <section class='categories-card-section'>
          {categoriesInfo.map((category) => {
            return(
              <Category categoryName={category.name} categoryImg={category.imageURL}></Category>
            )
          })}
        </section>
      </section>
    )
}

export default CategoriesSection;