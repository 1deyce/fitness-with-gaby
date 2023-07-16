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
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;