import React, { useEffect } from 'react'
import Gallery from '../components/UI/Gallery';
import Hero from '../components/UI/Hero';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title])
};
const HomePage = () => {
  usePageTitle('Fitness With Gaby');

  return (
    <section className='pt-0 mb-0 bg-black overflow-hidden'>
      <Hero />
      <Gallery />
    </section>
  );
};

export default HomePage;