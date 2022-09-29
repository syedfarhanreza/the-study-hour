import React from 'react';
import logo from '../../components/images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <img src={logo} alt="" />
            <h1>The Study Hour</h1>
        </div>
    );
};

export default Header;