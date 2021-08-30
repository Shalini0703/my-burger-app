import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../BackDrop/Backdrop';

const sidedrawer = (props) => {
    let openCloseSideDrawer = [classes.SideDrawer, classes.Close];
    if(props.show){
        openCloseSideDrawer = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show = {props.show} clicked = {props.closed}/>
            <div className = {openCloseSideDrawer.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>   
    )

}

export default sidedrawer;