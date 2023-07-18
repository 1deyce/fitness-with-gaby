import React from 'react'
import "../../styles/pricing.css";
import { Link } from 'react-router-dom';

const Pricing = () => {
    return <section>
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">
                    Services
                </h2>
                {/* <p className='highlights'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, <br />laboriosam corrupti tenetur ducimus quaerat dignissimos?
                </p> */}
            </div>

            {/* ========== pricing wrapper ============ */}
            <div className="pricing__wrapper">
                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Ladies Bootcamp</h2>
                        <h2 className="pricing section__title">R450 <span className="highlights"> / 12 sessions</span></h2>
                    </div>

                    <div className="services">
                        <ul className="vertical-list">
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    <span class='high__v2'>Venue :</span>Central Park, Century City
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                <span class='high__v2'>Days :</span>Mon, Wed & Thurs
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                <span class='high__v2'>Times :</span> 5h45 - 6h45 / 17h45 - 18h45
                            </li>
                        </ul>

                    <Link to="/contact">
                        <button className="register__btn">Join Now</button>
                    </Link>

                    </div>
                </div>

                <div className="pricing__item pricing__item-02">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Personal Training</h2>
                        <h2 className="pricing section__title">R600 <span className="highlights"> / 12 sessions, area dependent</span></h2>
                    </div>

                    <div className="services">
                        <ul className="vertical-list">
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                Venue :<span class='high__v2'>Client's Home</span>
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                Days : <span class='high__v2'>Availability Dependent</span>
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                Times :<span class='high__v2'>Availability Dependent</span>
                            </li>
                        </ul>

                        <Link to="/contact">
                            <button className="register__btn">Join Now</button>
                        </Link>
                    </div>
                </div>

                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Sport Massage</h2>
                        <h2 className="pricing section__title">R150 - R350<span className="highlights"></span></h2>
                    </div>

                    <div className="services">
                        <ul className="vertical-list">
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                <span className='high__v2'>30min:</span>Targeted Muscle - R150
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                <span className='high__v2'>60min :</span>Full Body - R250
                            </li>
                            <li>
                                <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                <span className='high__v2'>90min :</span>Full Bod Deep Tissue - R350
                            </li>
                        </ul>

                        <Link to="/contact">
                            <button className="register__btn">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Pricing;