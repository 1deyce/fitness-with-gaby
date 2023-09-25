import React from 'react'
import Pricing from "../components/UI/Pricing";
import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};
const BookingsPage = () => {
  usePageTitle('Bookings | FWG');

  return (
    <section className='pt-0 mb-0 bg-black overflow-y-hidden'>
      <Pricing />
    </section>
  );
};

export default BookingsPage;