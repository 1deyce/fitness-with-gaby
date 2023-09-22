import React, { useEffect } from 'react';
import About from '../components/UI/About';

const usePageTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title])
};

const AboutPage = () => {
    usePageTitle('Fitness With Gaby');

    return (
        <section className='bg-black'>
            <About />
        </section>
    )
}

export default AboutPage;
