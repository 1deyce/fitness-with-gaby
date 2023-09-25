import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";
import Logo from "./assets/img/logo1.jpg";
import Layout from "./pages/Layout";
import BookingsPage from "./pages/BookingsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

export default function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Fitness With Gaby"
    Aos.init();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2450); // value of delay length in ms.

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2450);
  };

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
        <BrowserRouter>
          <Routes onChange={handlePageChange}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
} 

ReactDOM.render(<App />, document.getElementById("root"));
