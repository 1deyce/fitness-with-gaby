import React from 'react';
import { Fade } from "react-awesome-reveal";

// Trainer images (beach / promenade solo shoot)
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img6 from "../../assets/img/6.jpg";
import img7 from "../../assets/img/7.jpg";
import img9 from "../../assets/img/9.jpg";
import img10 from "../../assets/img/10.jpg";
import img11 from "../../assets/img/11.jpg";
import img13 from "../../assets/img/13.jpg";
import img14 from "../../assets/img/14.jpg";


const galleryContext = require.context("../../assets/img/gallery", false, /\.(jpe?g|png)$/);
const g = {};
galleryContext.keys().forEach((key) => {
  g[key.match(/(new\d+)/)[1]] = galleryContext(key);
});

// Fixed 11 / 11 / 11 layout (solo / bootcamp / hiking). This arrangement was
// generated once to be balanced in height with no two same-type or two black &
// white images stacked together. It is intentionally static — the same on every
// load — rather than reshuffled each visit.
const COLUMNS = [
  // L
  [img7, g.new12, img6, g.new01, img9, g.new16, g.new07, img10, g.new10, g.new19, g.new22],
  // M
  [g.new03, img1, g.new09, img4, g.new14, g.new06, g.new18, g.new05, g.new15, img14, g.new17],
  // R
  [g.new13, g.new08, img13, g.new21, g.new02, img2, g.new04, g.new11, img11, g.new20, img3],
];

const Gallery = () => {
  return (
    <section className='bg-black mt-40'>
      <Fade duration={2000}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-6 md:m-20 items-start">
          {COLUMNS.map((column, colIndex) => (
            <div className="grid gap-4 content-start" key={colIndex}>
              {column.map((src, i) => (
                <div key={i}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={src}
                    alt="FWG gallery"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Gallery;
