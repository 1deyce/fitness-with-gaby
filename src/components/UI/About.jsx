import React from "react";
import geby from "../../assets/img/gaby-new.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section 
      id="about"
    >
      <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col justify-center gap-8">
          <div className="w-full flex flex-col justify-center mt-40 mb-14">
            <h1 
              className="text-3xl lg:text-5xl font-bold leading-8 text-white text-center pb-12"
            >
              About Us
            </h1>
            <p
              className="text-center text-lg font-normal leading-8 text-[--heading-color]"
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
            <h1 className="text-3xl lg:text-5xl font-bold leading-8 text-white text-center pt-32 pb-20">About Your Trainer</h1>
            {/* Qualifications */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-bold leading-8 text-white text-left pb-12">Qualifications</h2>
                  <ul className="mb-16 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Bachelor of Arts <span className="text-[--heading-color]">(BA)</span> Sport, Recreation and Exercise Science</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Bachelor of Arts <span className="text-[--heading-color]">(BA Hons)</span> Sport Science</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Certified Sport Massage Therapist</span>
                    </li>
                  </ul>
                {/* Experience */}
                  <h2 className="text-3xl lg:text-5xl font-bold leading-8 text-white text-left pb-12">Experience</h2>
                  <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Bootcamp Fitness Instructor - 3 years</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Personal Trainer - 10 months</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Sport Massage Therapist - 10 months</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg 
                          className="flex-shrink-0 w-5 h-5 text-[--heading-color]" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="text-white text-xl">Strength and Conditioning Intern - 6 months <span className="text-[--heading-color]">(Cape Town City FC)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
                <div className="w-full lg:w-1/2 flex justify-end mt-20 sm:mt-0">
                  <img 
                    className="rounded-full h-[600px] w-auto ml-6 sm:ml-0 pb-6 flex-shrink-0" 
                    src={geby} 
                    alt="Gabriella"
                    title="Gabriella"
                  />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
