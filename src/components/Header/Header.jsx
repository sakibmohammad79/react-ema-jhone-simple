import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/OrderReview">Order Review</a>
                <a href="/ManageInventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;