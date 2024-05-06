import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/background-vid (2).mp4";
import "../../App.css";

const Start = () => {
  function handlePlay() {
    const video = document.getElementById('video');
    video.play().catch((error) => {
      // Autoplay was blocked or failed.
      // You can handle the error here or provide an alternative user interaction to start video playback.
      console.error('Autoplay failed:', error);
    });
  }
  
  function handleLoadedData() {
    const video = document.getElementById('video');
    if (video.paused) {
      video.play().catch((error) => {
        // Autoplay was blocked or failed.
        // You can handle the error here or provide an alternative user interaction to start video playback.
        console.error('Autoplay failed:', error);
      });
    }
  }



  return (
    <section 
      id="hero" 
      className="bg-black"
    >
      <div className="relative lg:absolute opacity-[0.5] right-0 left-0">
        <video 
          playsInline 
          autoPlay 
          loop 
          muted 
          id="video"
          onClick={handlePlay}
          onLoadedData={handleLoadedData}
          onPlay={handlePlay}
          preload="auto"
        >
          <source src={backgroundVideo} type="video/mp4" className="" />
        </video>
      </div>
      <div className="relative isolate px-6 lg:px-8 z-[1]">
        <div className="mx-auto max-w-3xl sm: py-20 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl mb-10">
              Let's get stronger!
            </h1>
            <p className="mt-6 text-xl font-bold leading-8 text-[--heading-color] text-center">
              <span className="text-white font-[600]">Fitness with Gaby</span>{" "}
              is the go-to destination for anyone looking to achieve their
              fitness goals in Cape Town. At{" "}
              <span className="text-white font-[600]">Fitness with Gaby</span>,
              we are dedicated to supporting our clients every step of the way,
              regardless of their current level of fitness or experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/bookings">
                <button 
                  className="block w-full rounded-md btn px-3.5 py-2.5 text-center text-sm font-semibold hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--heading-color]"
                >
                  Get Started
                </button>
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-[--heading-color]"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
