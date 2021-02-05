import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({id, title, logoURL, size, items, history, match}) => {
    return ( 
        <div 
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${id}`)}
            >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${logoURL})`
                }}
            />
            {/*<div className='content'>
                <Link to={`/${id}`}>{title.toUpperCase()}</Link>
            </div>*/}
        </div>
     );
}
 
export default withRouter(MenuItem);