import React from 'react';
import Navigationitem from './NavigationItem/NavigationItem';
import classes from './Navigationitems.css'

const navigationitems = (props) => {
    return (
        <ul className = {classes.NavigationItems}>
            <Navigationitem link = '/' active>Burger builder</Navigationitem>
            <Navigationitem link = '/'>Reset</Navigationitem>
        </ul>
    )
}

export default navigationitems;