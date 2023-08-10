import React from 'react';
import "../../styles/hero.css";
import geby from "../../assets/img/geby.png";
// import { RiHeartPulseLine, RiMapPinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Hero = () => {
    return <section id='about'>
        <div className="container">
            <div className="hero__wrapper mr-20 pr-20 flex flex-col md:flex-row items-start">
                {/* ========== hero img ========== */}
                <div className="hero__img flex md:w-1/2">
                    <img className='border-black rounded-full border-6 h-[350px] flex my-40 mx-40 ml-20' src={geby} alt="" />   
                </div>
                <div className='hero__content md:w-1/2 md:pl-8 w-full'>
                    <h2 className="section__title">
                        About Us
                    </h2>   
                    <p className='sectionp'>
                        <span className='herop'>Fitness with Gaby</span> is the go-to destination for anyone looking
                        to achieve their fitness goals in Cape Town. At <span className='herop'>Fitness with Gaby</span>,
                        we are dedicated to supporting our clients every step of 
                        the way, regardless of their current level of fitness or experience.
                        <br /><br />
                        Beyond bootcamp and personal training, we offer a range of massage
                        services to ensure our clients are feeling & performing at their best.
                        Our <span className='herop'>Full Body</span> Sport Massage & 
                        <span className='herop'> Targeted Muscle Group</span> Sport Massage are
                        the perfect complement to any fitness routine, helping to prevent injury,
                        relieve muscle tension, and improve overall recovery time.
                        With us, you'll be one step closer to reaching your fitness & wellness goals.<br /><br />
                        <span className='herop'>Book with us today & experience the difference!</span>
                    </p> 
                    <div className='w-full flex justify-center'>
                        <Link to="/bookings">
                            <button className="register__btn">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>


                {/* ========== hero img ========== */}
                {/* <div className="hero__img">
                    <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart__rate">
                            <h5>Heart Rate</h5>
                            <span style={{color: 'var(--heading-color)'}}><RiHeartPulseLine size={30} /></span>
                            <h6>2567 BPM</h6>
                        </div>
                        <div className="gym__location">
                            <span style={{color: 'var(--heading-color)'}}><RiMapPinLine size={30} /></span>
                            <h5>Find a new <br />
                                gym near you
                            </h5>
                        </div>    
                        <div className="dumbell__icon">
                            <img src={dumbleIcon} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
    </section>
}

export default Hero;