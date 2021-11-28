import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './navigation.css';
import { faImages } from '@fortawesome/free-solid-svg-icons';



const Navigation = () => {

    return (
        <Fragment>
            <div className='nav-container'>
                <div className='nav-left'>
                 
                </div>
                <div className='nav-right'>
                    <Link to='/' className='nav-right__item nav-link'>HOME</Link>
                    <Link to='/participants' className='nav-right__item nav-link'>PARTICIPANTS</Link>
                    <Link to='/purchases' className='nav-right__item nav-link'>PURCHASES</Link>
                    <Link to='/owes' className='nav-right__item nav-link'>OWES</Link>
                    <a href="http://localhost/teta" class='nav-right__item nav-link'>HOME</a>
                    <a href="http://localhost/login-registration" class='nav-right__item nav-link' >LOGOUT</a>
                </div>
            </div>
            <div className='nav-container-mobile'>
                <Menu width={ '50%' }>
                    <Link to='/' className='menu-item'>HOME</Link>
                    <Link to='/participants' className='menu-item'>PARTICIPANTS</Link>
                    <Link to='/purchases' className='menu-item'>PURCHASES</Link>
                    <Link to='/owes' className='menu-item'>OWES</Link>
                </Menu>
            </div>
        </Fragment>
    )
}

export default Navigation;