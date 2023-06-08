import React from 'react';
import "../../styles/header.css";
import logo from "../../assets/img/logo1.jpg";


/*const nav__links =[
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#',
        display:'About'
    },
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#',
        display:'Home'
    },
]*/

const Header = () => {
    return <header>
        <div className='container'>
            <div className='nav__wrapper'>

                {/* ======= LOGO ======== */}
                <div className='logo'>
                    <div className="logo__img">
                        <img src={logo} alt="" />
                    </div>
                    <h2>Fitness with Gaby</h2>
                </div>

                {/* ======= nav menu ======== */}

                    <div className="navigation">
                        <ul className="menu">

                        </ul>
                    </div>
            </div>
        </div>
    </header>
};

export default Header;