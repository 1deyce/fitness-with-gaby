import React, { useRef, useState } from "react";
import "../../styles/testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

export default function Testimonials() {
    return (
        <>
            <section>
                <div className="container">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="container">
                                <div className="slide__img">
                                    <img src={avatar01} alt="" />
                                </div>

                                <h4>Gabriella Robertson</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dignissimos quidem, aliquam iste neque magni, placeat cumque at nobis, ratione ullam. Modi, labore quis? Magnam nostrum amet culpa ullam laborum?
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="slide__img">
                                    <img src={avatar02} alt="" />
                                </div>

                                <h4>Gabriella Robertson</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus necessitatibus itaque, laudantium ad vel debitis in tempora, aspernatur veniam magni. Hic totam et, laboriosam nostrum facere aliquam animi tempora.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="slide__img">
                                    <img src={avatar01} alt="" />
                                </div>

                                <h4>Gabriella Robertson</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minus deleniti expedita optio incidunt hic quidem nisi assumenda perferendis alias officiis debitis laborum provident aliquid ipsam beatae eum dolor quia.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}