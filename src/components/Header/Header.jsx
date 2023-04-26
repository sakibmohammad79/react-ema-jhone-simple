import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then((result) =>{
            console.log(result)
        })
        .catch(error => console.error(error));
    }
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='userName'>{user.email}<button onClick={handleLogOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;