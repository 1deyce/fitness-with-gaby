import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom/dist";
import { createRoot } from "react-dom/client";
import Aos from "aos";
import Logo from "./assets/img/logo1.jpg";
import BookingsPage from "./pages/BookingsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PaymentPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import ShopPage from "./pages/ShopPage";
import backgroundVideo from "./assets/background-vid (2).mp4";
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    document.title = "Fitness With Gaby"
    Aos.init();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]); // this effect runs on route change

  useEffect(() => {
    if (location.pathname === '/') {
      const video = videoRef.current;

      const handleCanPlay = () => {
        setIsVideoReady(true);
      };

      video.addEventListener("canPlay", handleCanPlay);

      return () => {
        video.removeEventListener("canPlay", handleCanPlay);
      }
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      {isloading || (location.pathname === '/' && isVideoReady) ? (
        <div className="loader-wrapper flex justify-center items-center h-screen bg-black">
          <img 
            src={Logo} 
            alt="Loader" 
            className="w-32 h-16 sm:w-40 sm:h-24 animate-bounce" 
          />
        </div>
      ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
      )}
      {location.pathname === "/" && (
        <video
          playsInline
          autoPlay
          loop
          muted
          ref={videoRef}
          style={{ display: "none" }}
        >
          <source src={backgroundVideo} type="video/mp4" className="" />
        </video>
      )}
    </div>
  );
} 

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);