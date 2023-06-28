import React from 'react';
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";
import { Link } from 'react-router-dom';


const Start = () => {
    return <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt="" />
                </div>

                <div className="start__content">
                    <h2 className="section__title">
                        Ready to make a <span className="highlights">change</span> ? 
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus neque tenetur commodi <br />
                        voluptas atque voluptatem, beatae ducimus autem eveniet repudiandae expedita quae officia <br />
                        nobis illum pariatur ipsum, inventore, nemo exercitationem.
                    </p>

                    <Link to="/bookings">
                        <button className="register__btn">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  
}

export default Start;