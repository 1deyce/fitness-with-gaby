import React, { useState, useRef } from 'react';
import "../../styles/header.css";
import "../../assets/tailwind.css";
import logo from "../../assets/img/logo1.jpg";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import { useHistory } from 'history';


const Navbar = ({ isOpen, handleLinkClick }) => {

    return (
        <nav>
            <ul className={`menu ${isOpen ? 'show__menu' : ''}`} >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bookings">Bookings</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    // const history = useHistory(); 


    const toggleMenu = ()=> {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = () => {
        toggleMenu();
    };

    // const handleLinkClick = (to) => {
    //     history.push(to); // Navigate to the specified route
    //     toggleMenu(); // Close the menu after navigation
    // };
      

    return (
        <header className=''>
            <div className="container">
                <div className="nav__wrapper">
                    {/* Your logo and main heading */}
                    <div className="logo">
                        <div className="logo__img">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <h2 className="main__head hidden md:block">Fitness with Gaby</h2>
                    </div>
                    {/* Navigation links */}
                    <div className={`navigation flex items-center gap-10 ${isMobile ? 'bg-[#3cc4bd]' : ''}`}>
                        <Navbar />
                    </div>
                    {/* Additional items on the right */}
                    <div className="nav__right flex items-center gap-4">
                        <span 
                            className="mobile_menu md:hidden text-white text-2xl cursor-pointer bg-black"
                            onClick={handleMenuClick}
                        >
                            <i className={`ri-${isOpen ? 'close-line' : 'menu-line'}`}></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;