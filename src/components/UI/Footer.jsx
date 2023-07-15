import React from 'react';
import "../../styles/footer.css";
import logo from "../../assets/img/logo1.jpg"
import { Link } from 'react-router-dom';


const Footer = () => {
    const year = new Date().getFullYear()  

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
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/bookings">Bookings</Link>
                                </li>
                                <li>
                                    <Link to="/reviews">Reviews</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="copyright">
                        © {year} developed by Keenan. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    </section>
}

export default Footer;