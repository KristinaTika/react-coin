import React from 'react';
import './Header.css';
import logo from '../../photos/logo.png';
import { Link } from 'react-router-dom';
import Search from '../containers/Search';

const Header = () => {

    return (
        <div className='Header'>
            <Link to="/">
                <img src={logo} alt='logo' className='Header-logo' />
            </Link>
            <Search />
        </div>
    );
};

export default Header;