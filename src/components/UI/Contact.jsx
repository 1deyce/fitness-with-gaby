import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const form = useRef();

  const [result, showResult] = useState(false);
  const Result = () => {
    return (
      <p className="text-[--heding-color] pt-4 text-bold">Message sent! I'll be in touch soon.</p>
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
        (response) => {
          console.log(response.text);
          showResult(true);
        },
        (error) => {
          console.log(error.text);
          showResult(true);
        }
      );

    e.target.reset();
  };

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
    <section id="contact" className="bg-black">
      <div className="isolate px-6 py-16 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-4xl font-bold text-white sm:text-6xl"
          >
            Contact Us
          </h2>
        </div>
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label 
                htmlFor="full-name" 
                className="w-full text-sm font-semibold leading-6 text-[--heading-color]"
              >
                Full name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="fullName"
                  id="full-name"
                  autoComplete="given-name"
                  className="text-semibold text-white bg-[#151515] block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-[#151515] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Name & Surname"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold leading-6 text-[--heading-color]"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="text-semibold text-white bg-[#151515] block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-[#151515] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={email}
                  placeholder="Email Address"
                />

                {error && <h2 className="font-thin" style={{color: 'red'}}>{error}</h2>}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label 
                htmlFor="subject" 
                className="block text-sm font-semibold leading-6 text-[--heading-color]"
              >
                Subject / Service
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="subject"
                  className="text-semibold text-white bg-[#151515] block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-[#151515] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="eg. Bootcamp..."
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label 
                htmlFor="message" 
                className="block text-sm font-semibold leading-6 text-[--heading-color]"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={3}
                  className="text-semibold text-white bg-[#151515] block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-[#151515] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="How can we help you?"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md btn px-3.5 py-2.5 text-center text-sm font-semibold hover:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--heading-color]"
            >
              Let's talk
            </button>
          </div>
          {result && <Result />}
        </form>
      </div>
    </section>
  );
};

export default Contact;
