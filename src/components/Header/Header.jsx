import React, { useState, useRef } from 'react';
import "../../styles/header.css";
import "../../assets/tailwind.css";
import logo from "../../assets/img/logo1.jpg";
import { Link } from 'react-router-dom';
import 

const Navbar = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=> {
        setIsOpen(!isOpen);
        if(menuRef.current !== null) {
            menuRef.current.classList.toggle('show__menu');
        }
    };

    const handleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    return (
        <nav className='' useRef={menuRef} onClick={toggleMenu}>
            <ul className='menu'>
                <li>
                    <Link onClick={handleClick} to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="/bookings">Bookings</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=> {
        setIsOpen(!isOpen);
        if(menuRef.current !== null) {
            menuRef.current.classList.toggle('show__menu');
        }
    };
    const isMobile = useMediaQuery({ maxWidth: 768 }); //adjust breakpoint as needed

    const handleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

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
                        <h2 className="main__head">Fitness with Gaby</h2>
                    </div>
                    {/* Navigation links */}
                    <div className={`navigation flex items-center gap-10 ${isMobile ? 'dark:bg-primaryColor' : ''}`}>
                        <Navbar />
                    </div>
                    {/* Additional items on the right */}
                    <div className="nav__right">
                        {/* <Link to="/">
                            <button className="register__btn">Contact Me</button>
                        </Link>                         */}
                        <span 
                            className="mobile_menu md:hidden text-white text-2xl cursor-pointer bg-[--heading-color]"
                            onClick={toggleMenu}
                        >
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
