import React from 'react';
import './Header.css';
import logo from '../../photos/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='Header'>
            <Link to="/home">
                <img src={logo} alt='logo' className='Header-logo' />
            </Link>
        </div>
    );
};

export default Header;