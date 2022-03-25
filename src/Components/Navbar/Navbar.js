import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css'

const Navbar = ({cart}) => {
    
    return (
        <div className='navbar-class'>
            <h1>Navbar</h1>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <p>Item:{cart}</p>
        </div>
    );
};

export default Navbar;