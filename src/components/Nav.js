import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

    const { nav, routeLink } = props;

    return(
        <Link to={routeLink}>{nav}</Link>
    )
}

export default Nav;