import React, { useState } from 'react';
import Nav from './Nav';

function MainNav() {
    const [nav, setNav] = useState('');
    const [routeLink, setRouteLink] = useState('');

    return (
        <>
            <Nav exact routeLink='/' nav='Home' />
            <Nav routeLink='/mac' nav='Mac' />
            <Nav routeLink='/ipad' nav='iPad' />
            <Nav routeLink='/iphone' nav='iPhone' />
            <Nav routeLink='/watch' nav='Watch' />
            <Nav routeLink='/tv' nav='TV' />
            <Nav routeLink='/music' nav='Music' />
        </>
    )
}

export default MainNav;