import React from 'react';
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";
import { RiHeartPulseLine, RiMapPinLine } from 'react-icons/ri';

const Hero = () => {
    return <section>
        <div className="container">
            <div className="hero__wrapper">
            {/* ========== hero content ========== */}
                <div className="hero__content">
                    <h2>
                        Exercise is the key to a 
                        <span className="highlights"> Healthy</span> Lifestyle
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quas ducimus odit sit vitae provident architecto, expedita vel autem eos dolorem quasi incidunt id numquam, omnis maxime commodi repudiandae blanditiis.
                    </p>

                    <div className="hero__btns">
                        <button className="register__btn">Get Started</button>
                        {/*<button className="watch__btn">
                            <span className="play__btn">
                                <i class="ri-play-line"></i>
                            </span>
                            Watch Video
                        </button>*/}
                    </div>
                </div>
            </div>

            {/* ========== hero img ========== */}
            <div className="hero__img">
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
                        <span style={{color: 'white'}}><RiHeartPulseLine size={30} /></span>
                        <h5>2567 BPM</h5>
                    </div>
                    <div className="gym__location">
                        <span style={{color: 'white'}}><RiMapPinLine size={30} /></span>
                        <h5>Find a new gym near you</h5>
                    </div>    
                    <div className="dumbell__icon">
                        <img src={dumbleIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Hero;