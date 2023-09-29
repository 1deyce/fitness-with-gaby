import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom/dist";
import { createRoot } from "react-dom/client";
import Aos from "aos";
import Logo from "./assets/img/logo1.jpg";
import Layout from "./pages/Layout";
import BookingsPage from "./pages/BookingsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import "remixicon/fonts/remixicon.css";
import "./App.css";

function App() {
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

  return (
    <div className="overflow-hidden">
      {isloading ? (
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
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
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