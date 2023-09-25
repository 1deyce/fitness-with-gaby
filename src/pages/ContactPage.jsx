import React from 'react';
import { useEffect } from 'react';
import Contact from '../components/UI/Contact';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};
const ContactPage = () => {
  usePageTitle('Contact Us | FWG');

  return (
    <section className='pt-0 mb-0 bg-black overflow-y-hidden'>
      <Contact />
    </section>
  );
};

export default ContactPage;