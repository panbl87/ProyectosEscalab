import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core'

import './header.styles.scss';

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            &nbsp;&nbsp;
            <h1>Service-On-Demand</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';
 
export default Header;