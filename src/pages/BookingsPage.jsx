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
    <div>
      <Pricing />
    </div>
  );
};

export default BookingsPage;