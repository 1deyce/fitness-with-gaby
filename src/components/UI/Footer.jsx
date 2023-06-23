import React from 'react';
import "../../styles/footer.css";
import logo from "../../assets/img/logo1.jpg"


const Footer = () => {
    return <section>
        <div className="footer-container">
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__box">
                        <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                        <h2>Fitness with Gaby</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nisi accusamus distinctio eaque, quis minus.</p>
                        </div>

                        <div className="footer__box">
                            <h4 className="footer__title">Quick Links</h4>

                            <ul className="footer__links">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Bookings</a>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </section>
}

export default Footer;