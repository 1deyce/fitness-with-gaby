// import React, { useState, useRef } from 'react';
// import "../../styles/header.css";
// import "../../assets/tailwind.css";
// import logo from "../../assets/img/logo1.jpg";
// import { Link } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// // import { useHistory } from 'history';


// const Navbar = ({ isOpen, handleLinkClick }) => {

//     return (
//         <nav>
//             <ul className={`menu ${isOpen ? 'show__menu' : ''}`} >
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/bookings">Bookings</Link>
//                 </li>
//                 <li>
//                     <Link to="/reviews">Reviews</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact Us</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// const Header = () => {
//     const menuRef = useRef(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const isMobile = useMediaQuery({ maxWidth: 768 });
//     // const history = useHistory(); 


//     const toggleMenu = ()=> {
//         setIsOpen(!isOpen);
//     };

//     const handleMenuClick = () => {
//         toggleMenu();
//     };

//     // const handleLinkClick = (to) => {
//     //     history.push(to); // Navigate to the specified route
//     //     toggleMenu(); // Close the menu after navigation
//     // };
      

//     return (
//         <header className=''>
//             <div className="container">
//                 <div className="nav__wrapper">
//                     {/* Your logo and main heading */}
//                     <div className="logo">
//                         <div className="logo__img">
//                             <Link to="/">
//                                 <img src={logo} alt="" />
//                             </Link>
//                         </div>
//                         <h2 className="main__head hidden md:block">Fitness with Gaby</h2>
//                     </div>
//                     {/* Navigation links */}
//                     <div className={`navigation flex items-center gap-10 ${isMobile ? 'bg-[#3cc4bd]' : ''}`}>
//                         <Navbar />
//                     </div>
//                     {/* Additional items on the right */}
//                     <div className="nav__right flex items-center gap-4">
//                         <span 
//                             className="mobile_menu md:hidden text-white text-2xl cursor-pointer bg-black"
//                             onClick={handleMenuClick}
//                         >
//                             <i className={`ri-${isOpen ? 'close-line' : 'menu-line'}`}></i>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom'
import logo from "../../assets/img/logo1.jpg";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Bookings', href: '/bookings', current: false },
  { name: 'Reviews', href: '/reviews', current: false },
  { name: 'Contact Us', href: 'contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[--heading-color] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <Link to='/'>
                        <img
                            className="h-9 w-auto cursor-pointer mt-1 ml-5"
                            src={logo}
                            alt="Fitness With Gaby"
                        />
                    </Link>
                    <h2 className="ml-10 mr-10 hidden md:block uppercase text-[--heading-color] font-[600] text-[2rem]">
                        Fitness with Gaby
                    </h2>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        activeClassName='bg-black text-white'
                        className='text-white hover:bg-[--heading-color] hover:text-black rounded-xl px-3 py-2 text-md font-[600] text-center ml-10 mt-1'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-black text-white' : 'text-gray-300 hover:bg-[--heading-color] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}