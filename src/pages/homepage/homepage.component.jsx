import React from 'react'; 
import ProductDescription from './../../components/product-description/product-description.component';
import {Route, Switch} from 'react-router-dom';

import Directory from './../../components/directory/directory.component';

import './homepage.styles.scss';

const Homepage = () => {
    return ( 
        <div className='homepage'>
            <Switch>
                <Route path="/" exact={true} component={Directory} />
                <Route path="/:id" component={ProductDescription} />
            </Switch>
            
        </div>
     );
}
 
export default Homepage;