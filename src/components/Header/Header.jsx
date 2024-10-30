import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo1.jpg";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Bookings", href: "/bookings", current: false },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Shop", href: "https://shop.fitnesswithgaby.co.za", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);
  const [navItems, setNavigation] = React.useState(navigation);
  const location = useLocation();

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));

    setNavigation(updatedNavigation);
  }, [location.pathname]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8 z-10 flex justify-center">
            <div className="relative flex h-16 items-center justify-center">
              <div className="relative inset-y-0 left-0 flex md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-[--heading-color] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mt-10"
                  onClick={toggleExpansion}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="false" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center pt-10">
                  <Link to="/">
                    <img
                      className="h-9 w-auto cursor-pointer mt-1 ml-5"
                      src={logo}
                      title="Fitness with Gaby"
                      alt="Fitness With Gaby"
                    />
                  </Link>
                  <h2 className="ml-10 mr-10 hidden xl:block uppercase text-[--heading-color] font-[600] text-[2rem]">
                    Fitness with Gaby
                  </h2>
                </div>
                <div className="hidden sm:ml-6 md:block md:pt-10">
                  <div className="flex lg:space-x-5">
                    {navItems.map((item) =>
                      item.href.startsWith("http") ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:bg-[--heading-color] hover:text-black rounded-xl px-6 py-2 text-md font-light text-center lg:ml-40 xl:ml-0 mt-1"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          activeclassname="bg-black text-white"
                          className="text-white hover:bg-[--heading-color] hover:text-black rounded-xl px-6 py-2 text-md font-light text-center lg:ml-40 xl:ml-0 mt-1"
                        >
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden flex justify-center">
            <div className="space-y-1 p-6 pb-3 pt-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "btn text-black"
                      : "text-gray-300 hover:bg-[--heading-color] hover:text-white",
                    "block rounded-md px-2 py-2 text-base font-medium w-full text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
