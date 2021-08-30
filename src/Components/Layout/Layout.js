import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer : false,
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer : false})
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {return {showSideDrawer : !this.state.showSideDrawer}})
    }

    render(){
        return(
            <Aux>
                <ToolBar toggleSideDrawer = {this.toggleSideDrawerHandler}/>
                <Sidedrawer show = {this.state.showSideDrawer} closed = {this.sideDrawerHandler}/>
                <main className = {classes.Content}>{this.props.children}</main>
            </Aux>
            );
    }    
}

export default Layout;