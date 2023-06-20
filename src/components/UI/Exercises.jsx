import React from 'react'
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return <section>
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section__title">
                Benefits of 
                <span className="highlights"> Exercise</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
              Perferendis praesentium labore omnis repellendus, libero quia?
            </p>
        </div>

        {/* ========== exercise list ========== */}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> 
                Repellendus repudiandae, voluptate nobis quis deleniti voluptatem.
              </p>
            </div>
          </div>
        </div>
    </div>
  </section>
}

export default Exercises