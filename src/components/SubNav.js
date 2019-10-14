import React from 'react';
import { Route } from 'react-router-dom';

function Mac(props) {
    return (
        <>
            <ul>
                <li>iMac</li>
                <li>iMac Pro</li>
            </ul>
        </>
    )
}

function Ipad(props) {
    return (
        <>
            <ul>
                <li>iPad Pro</li>
                <li>iPad Air</li>
            </ul>
        </>
    )
}

function Iphone(props) {
    return (
        <>
            <ul>
                <li>iPhone 11 Pro</li>
                <li>iPhone 11</li>
            </ul>
        </>
    )
}

function Watch(props) {
    return (
        <>
            <ul>
                <li>Apple Watch Series 5</li>
                <li>Apple Watch Nike</li>
            </ul>
        </>
    )
}

function TV(props) {
    return (
        <>
            <ul>
                <li>Apple TV App</li>
                <li>Apple TV+</li>
            </ul>
        </>
    )
}

function Music(props) {
    return (
        <>
            <ul>
                <li>Apple Music</li>
                <li>HomePod</li>
            </ul>
        </>
    )
}

function SubNav() {
    return (
        <div className="sub-nav">
            <Route path='/mac' component={Mac} />
            <Route path='/ipad' component={Ipad} />
            <Route path='/iphone' component={Iphone} />
            <Route path='/watch' component={Watch} />
            <Route path='/tv' component={TV} />
            <Route path='/music' component={Music} />
        </div>
    )
}

export default SubNav;