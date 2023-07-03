import React from 'react'
import Testimonials from "../components/UI/Testimonials";
import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};

const ReviewsPage = () => {
  usePageTitle('Reviews | FWG');

  return (
    <div>
        <Testimonials />
    </div>
  );
};

export default ReviewsPage;