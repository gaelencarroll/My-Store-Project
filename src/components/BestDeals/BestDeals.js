import React from 'react';

import styles from './BestDeals.css';
import ProductCard from '../ProductCard/ProductCard';

function BestDeals(){

    async function getProductData() {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    }

    const results = getProductData()
    console.log(results)

    // let results = fetch('https://fakestoreapi.com/products?limit=5')
    //         .then(res=>res.json())
    //         .then(json=>{
    //             console.log(json[0])
    //         })

    
    // const returnResults = () => {
    //     results.then((res) => {
    //         console.log(res)
    //     })
    // }

    // const final = returnResults()
    // console.log(final)

    return(
        <section>
            <h3 className='title'>Today's Best Deals For You!</h3>
            <ProductCard id={1} imageURL={'/images/canon-camera.jpg'} productName={'Canon Camera'} price={'110.00'} description={'Canon camera with dual lenses'} ratingValue={4} numRatings={'120'}></ProductCard>
        </section>
    )
}

export default BestDeals;