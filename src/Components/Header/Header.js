import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1 className="companyName">Flipkart</h1></Link>
            <div>
            <Link to="/" className="navbarLinks">Home</Link>
            <Link to="/cart" className="navbarLinks">Cart</Link>
            </div>
        </div>
    )
}

export default Header
