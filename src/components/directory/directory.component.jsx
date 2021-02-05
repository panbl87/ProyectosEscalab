import React from 'react';
import productData from './../../data/products.data';
import MenuItem from './../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
    return ( 
        <div className='directory-menu'>
            {
                productData.map((product) => {
                    return(
                        <MenuItem key={product.id} id={product.id} title={product.title} logoURL={product.logoURL} items={product.items}/>
                    )
                })
            }
        </div>
     );
};
 
export default Directory;