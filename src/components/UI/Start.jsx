import React from 'react';
import "../../styles/start.css";
// import trainerImg from "../../assets/img/trainer.png";
import { Link } from 'react-router-dom';


const Start = () => {
    return <section id='hero'>
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-3xl sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
                        Let's get stronger!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[--heading-color] text-center">
                        <span className='text-white font-[600]'>Fitness with Gaby</span> is the go-to destination for anyone looking
                        to achieve their fitness goals in Cape Town. At <span className='text-white font-[600]'>Fitness with Gaby</span>,
                        we are dedicated to supporting our clients every step of 
                        the way, regardless of their current level of fitness or experience.
                        <br /><br />
                        Beyond bootcamp and personal training, we offer a range of massage
                        services to ensure our clients are feeling & performing at their best.
                        Our <span className='text-white font-[600]'>Full Body</span> Sport Massage & 
                        <span className='text-white font-[600]'> Targeted Muscle Group</span> Sport Massage are
                        the perfect complement to any fitness routine, helping to prevent injury,
                        relieve muscle tension, and improve overall recovery time.
                        With us, you'll be one step closer to reaching your fitness & wellness goals.<br /><br />
                        <span className='text-white font-[600]'>Book with us today & experience the difference!</span>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/bookings">
                        <button className="register__btn">Get Started</button>
                    </Link>
                    <a href='#about'
                        className='text-sm font-semibold leading-6 text-white hover:text-[--heading-color]' to='#about'
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
    </section>
}

export default Start;