import React from "react";
// import "../../styles/pricing.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-10 lg:mb-16">
              <h2 
                className="mb-4 text-5xl font-bold text-white"
              >
                Book with us today!
              </h2>
              {/* <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
            <Helmet>        
              <script 
                id='setmore_script' 
                type='text/javascript' 
                src='https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js'
              />
            </Helmet>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* <!-- Pricing Card --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black rounded-lg border-2 border-[--heading-color] shadow xl:p-8">
                  <h3 className="mb-4 text-2xl font-semibold">Ladies Bootcamp</h3>
                  <p className="font-light text-center text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold text-[--heading-color]">R450</span>
                      <span className="text-gray-500 dark:text-gray-400">/12 sessions</span>
                  </div>
                  {/* <!-- List --> */}
                  <ul className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Venue : Central Park , Century City </span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span className="text-[--heading-color]">Days : Mon , Wed & Thurs</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Times : 5h45 - 6h45 / 17h45 - 18h45</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">6 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <Link
                    to="/contact" 
                    className="hover:text-white hover:ease-linear duration-150 btn font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Get started
                  </Link>
              </div>
              {/* <!-- Pricing Card --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black rounded-lg border-2 border-[--heading-color] shadow xl:p-8">
                  <h3 className="mb-4 text-2xl font-semibold">Personal Training</h3>
                  <p className="font-light text-center text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold text-[--heading-color]">R600</span>
                      <span className="text-gray-500 dark:text-gray-400">/12 sessions  area-based</span>
                  </div>
                  {/* <!-- List --> */}
                  <ul className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Venue : Client's home</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span className="text-[--heading-color]">Days : Availability Dependent</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Times : Availability Dependent</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">6 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <Link
                    to="/contact" 
                    className="hover:text-white hover:ease-linear duration-150 btn font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Get started
                  </Link>
              </div>
              {/* <!-- Pricing Card --> */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black rounded-lg border-2 border-[--heading-color] shadow xl:p-8">
                  <h3 className="mb-4 text-2xl font-semibold">Sport Massage</h3>
                  <p className="font-light text-center text-gray-500 sm:text-lg dark:text-gray-400">Simply click "Book Now" to book an appointment.</p>
                  <div className="flex justify-center items-baseline my-8">
                      <span 
                        className="mr-2 text-5xl font-extrabold text-[--heading-color]"
                      >
                        R150-R350
                      </span>                  
                  </div>
                  {/* <!-- List --> */}
                  <ul className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>30min : Targeted Muscle - R150</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span className="text-[--heading-color]">60min : Full body - R250</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>90min : Full body Deep Tissue - R350</span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Premium support: <span className="font-semibold">6 months</span></span>
                      </li>
                      <li className="flex items-center space-x-3">
                          {/* <!-- Icon --> */}
                          <svg className="flex-shrink-0 w-5 h-5 text-[--heading-color]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>Free updates: <span className="font-semibold">6 months</span></span>
                      </li>
                  </ul>
                  <a 
                    style={{float: "none"}}
                    className="hover:text-white hover:ease-linear duration-150 btn font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    id='Setmore_button_iframe' 
                    href='https://booking.setmore.com/scheduleappointment/55279423-9f3f-4e73-b502-37436930d6ec'
                  >
                    Book Now
                  </a>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Pricing;
