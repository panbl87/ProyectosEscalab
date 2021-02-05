import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Products from './../../data/products.data';
import ProductDetail from './../product-detail/product-detail.component';

const ProductDescription = (props) => {
    const {id} = useParams();
    console.log(id);
    return ( 
        <>
            <div>
                {Products[id - 1] ?
                <div>
                    <h1>{Products[id - 1].title}</h1>
                </div>
                :
                    <Redirect to='/' />
                }
            </div>
            <div>
                {Products[id - 1].items
                .map(({id, ...otherProductProps}) => (
                    <ProductDetail key={id} {...otherProductProps} />
                ))}
            </div>
        </>
     );
}
 
export default ProductDescription;