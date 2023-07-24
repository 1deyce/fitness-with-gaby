import React from 'react'
import Hero from '../components/UI/Hero';
import Start from '../components/UI/Start';
import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};
const Home = () => {
  usePageTitle('Fitness With Gaby');

  return (
    <div>
      <Start />
      <Hero />
    </div>
  );
};

export default Home;