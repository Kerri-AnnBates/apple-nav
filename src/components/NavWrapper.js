import React from 'react';
import MainNav from './MainNav';
import SubNav from './SubNav';

function NavWrapper() {
    return (
        <div className="nav-wrapper">
            <MainNav className="main-nav" />
            <SubNav />
        </div>
    )
}

export default NavWrapper;