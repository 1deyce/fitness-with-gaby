import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import "../../assets/tailwind.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const [result, showResult] = useState(false);
  const Result = () => {
    return (
      <p className="text-white pt-4 text-bold">Message sent! I'll be in touch soon.</p>
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4apgiwb',
        'template_93cay28',
        form.current,
        'awgSNM6x33L8HH2UI',
      )
      .then(
        (result) => {
          console.log(result.text);
          showResult(true);
        },
        (error) => {
          console.log(error.text);
          showResult(true);
        }
      );

    e.target.reset();
  };

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = e => {
    if (!isValidEmail(e.target.value)) {
      setError('Be sure to enter a valid email');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  return (
    <section id="contact" className="bg-black pb-16">
      <div className="container text-center">
        <h2 className="text-white font-[700] text-[50px] mb-5 text-center">
            Contact Us
        </h2>
        <span className='w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center mb-5'>
          <a 
            href="https://www.instagram.com/fitnesswithgaby_/" 
            className='text-white font-[500] text-[30px] hover:text-white'
          >
            <i class="ri-instagram-line"></i>
          </a>
        </span>
        <div className="md:flex justify-between items-center mt-5">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            {/* Google Maps iframe */}
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423812.32927425334!2d18.326422855396498!3d-33.91452907067648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1682582910036!5m2!1sen!2sza" className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-black px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={sendEmail} ref={form}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] text-white"
                  name="fullName" // Add a name attribute to the input
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] text-white"
                  name="email" // Add a name attribute to the input
                  onChange={handleChange}
                  value={email}
                  required
                />

                {error && <h2 style={{color: 'red'}}>{error}</h2>}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] text-white"
                  name="subject" // Add a name attribute to the input
                  required
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] text-white resize-none"
                  name="message" // Add a name attribute to the textarea
                  required
                />
              </div>

              <button className="register__btn w-full p-3 focus:outline-none rounded-[5px] text-black hover:bg-[--heading-color] hover:text-white text-center ease-linear duration-150">
                Send Message
              </button>

              {result && <Result />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
