import React, { useState } from 'react';
import Nav from './Nav';

function MainNav() {

    return (
        <div className='main-nav'>
            <Nav exact routeLink='/' nav='Home' />
            <Nav routeLink='/mac' nav='Mac' />
            <Nav routeLink='/ipad' nav='iPad' />
            <Nav routeLink='/iphone' nav='iPhone' />
            <Nav routeLink='/watch' nav='Watch' />
            <Nav routeLink='/tv' nav='TV' />
            <Nav routeLink='/music' nav='Music' />
        </div>
    )
}

export default MainNav;