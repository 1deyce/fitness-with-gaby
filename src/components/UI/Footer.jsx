import React from 'react';
// import "../../styles/footer.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo1.jpg"

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <footer className='pt-10'>
        {/* =========== footer top =========== */}
        {/* =========== footer top end =========== */}
        {/* =========== footer bottom =========== */}
        <div className='bg-black py-4 mt-10 mb-2 border-2 border-[--heading-color]'>
            <div className="container">
                <div className="flex items-center justify-center sm:justify-between">

                    <div className='hidden sm:block'>
                        <div className="flex items-center gap-[10px]">
                            <Link to='/'>
                                <img
                                    className="h-9 w-auto cursor-pointer ml-5 bg-[#1b1e29]"
                                    src={logo}
                                    title='Fitness with Gaby'
                                    alt="Fitness With Gaby"
                                />
                            </Link>

                            <div className='leading-[20px] bg-black'>
                                <h2 className='text-gray-200 font-[00] text-[18px] bg-[#1b1e29] mb-1'>
                                    FITNESS WITH GABY
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className='flex items-center justify-center gap-10 mb-1'>
                            <li><a className='text-white font-[600] hover:text-[--heading-color]' href="/">Home</a></li>
                            <li><a className='text-white font-[600] hover:text-[--heading-color]' href="/bookings">Bookings</a></li>
                            <li><a className='text-white font-[600] hover:text-[--heading-color]' href="/reviews">Reviews</a></li>
                            <li><a className='text-white font-[600] hover:text-[--heading-color]' href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='bg-black'>
                        <p className='text-gray-600 text-[15px] text-center font-[600] bg-[#1b1e29] mt-2'>© {year} Fitness with Gaby™ - All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
        {/* =========== footer bottom =========== */}
        </footer>
    );
};

export default Footer;