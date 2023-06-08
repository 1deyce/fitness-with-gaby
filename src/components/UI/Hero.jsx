import React from 'react'

const Hero = () => {
    return <section>
        <div className="container">

            {/* ========== hero content ========== */}
            <div className="hero__content">
                <h2>Exercise is the key to a Healthy Lifestyle</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quas ducimus odit sit vitae provident architecto, expedita vel autem eos dolorem quasi incidunt id numquam, omnis maxime commodi repudiandae blanditiis.
                </p>

                <div className="hero__btns">
                    <button className="register__btn">Get Started</button>
                    <button className="watch__btn">
                        <span>
                            <i class="ri-play-line"></i>
                        </span>
                        Watch Video
                    </button>
                </div>
            </div>

            {/* ========== hero img ========== */}
            <div className="hero__img"></div>
        </div>
    </section>
}

export default Hero;  