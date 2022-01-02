import React from "react";
import '../Styles/navStyle.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const style = {
        color: 'inherit',
        textDecoration: 'inherit',
    };
    return(
        <nav className="nav__container">
            <span className="logo"><Link to="/" style={style}>GymHelper</Link></span>         
            <ul className="nav__items">
                <Link to="/about" style={style}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style={style}>
                    <li>Shop</li>
                </Link>
                <Link to="/contact" style={style}>
                    <li>Contact</li>
                </Link>
                
            </ul>            
        </nav>
    )
    
}

export default Nav;