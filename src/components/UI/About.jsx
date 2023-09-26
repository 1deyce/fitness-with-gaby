import React from "react";
import geby from "../../assets/img/geby.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-black"
    >
      <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-12/12 flex flex-col justify-center lg:ml-24">
                <h1 
                  className="text-3xl lg:text-5xl font-bold leading-8 text-white text-center pb-12"
                >
                  About Us
                </h1>
                <p
                  className="text-center text-lg font-normal leading-6 text-[--heading-color]"
                >              
                  Beyond bootcamp and personal training, we offer a range of massage
                  services to ensure our clients are feeling & performing at their
                  best. Our <span className="text-white font-[600]">Full Body</span> Sport Massage &
                  <span className="text-white font-[600]"> Targeted Muscle Group</span> Sport
                  Massage are the perfect complement to any fitness routine, helping
                  to prevent injury, relieve muscle tension, and improve overall
                  recovery time. With us, you'll be one step closer to reaching your
                  fitness & wellness goals.
                  <br />
                  <br />
                  <span className="text-white font-[600]">
                    Book with us today & experience the difference!
                  </span>
                </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Link to="/bookings">
                  <button 
                    className="block w-full rounded-md btn px-3.5 py-2.5 text-center text-sm font-semibold hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--heading-color]"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-8/12 mt-20 sm:mt-0">
                <img 
                  className="rounded-full h-[500px] ml-6 sm:ml-0" 
                  src={geby} 
                  alt="Woman" 
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
