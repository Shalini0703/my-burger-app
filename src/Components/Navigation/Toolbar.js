import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import Navigationitems from './NavigationItems/Navigationitems';
import Drawertoggle from './SideDrawer/DrawerToggle/Drawertoggle';

const toolbar = (props) => {
    return(
        <header className = {classes.Toolbar}>
            <Drawertoggle clicked ={props.toggleSideDrawer}/>
            <div className = {classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.displayDesktop}>
                <Navigationitems/>
            </nav>
        </header>
    )

}

export default toolbar;