import React from 'react'
import Testimonials from "../components/UI/Testimonials";
import { useEffect } from 'react';
import "../../src/assets/tailwind.css";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};

const ReviewsPage = () => {
  usePageTitle('Reviews | FWG');

  return (
    <section className='pt-0 mb-0 bg-black overflow-y-hidden'>
      <Testimonials />
    </section>
  );
};

export default ReviewsPage;