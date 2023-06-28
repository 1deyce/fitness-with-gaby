import React from 'react';
import "../../styles/header.css";
import logo from "../../assets/img/logo1.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bookings">Bookings</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header className=''>
            <div className="container">
                <div className="nav__wrapper">
                    {/* Your logo and main heading */}
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className="main__head">Fitness with Gaby</h2>
                    </div>
                    {/* Navigation links */}
                    <div className="navigation">
                        <Navbar />
                    </div>
                    {/* Additional items on the right */}
                    <div className="nav__right">
                        <Link to="/">
                            <button className="register__btn">Contact Me</button>
                        </Link>                        
                        <span className="mobile_menu">
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
