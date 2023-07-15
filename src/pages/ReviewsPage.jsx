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
    <div>
      <Testimonials />
    </div>
  );
};

export default ReviewsPage;