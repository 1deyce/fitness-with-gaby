import React, { useEffect } from "react";
import About from "../components/UI/About";

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

const AboutPage = () => {
    usePageTitle("About | FWG");

    return (
        <section className="pt-0 mb-0 bg-black overflow-y-hidden">
            <About />
        </section>
    );
};

export default AboutPage;
