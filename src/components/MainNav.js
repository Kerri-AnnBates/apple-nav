import React, { useState } from 'react';
import Nav from './Nav';

function MainNav() {
    const [nav, setNav] = useState('');

    return (
        <>
            <Nav nav='Mac' />
            <Nav nav='iPad' />
            <Nav nav='iPhone' />
            <Nav nav='Watch' />
            <Nav nav='TV' />
            <Nav nav='Music' />
        </>
    )
}

export default MainNav;