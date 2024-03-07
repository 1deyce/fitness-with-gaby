import React from 'react';
import { Fade } from "react-awesome-reveal";
import img1 from "../../assets/img/1.jpg";
// import img2 from "../../assets/img/14.jpg";
import img3 from "../../assets/img/13.jpg";
import img4 from "../../assets/img/3.jpg";
import img5 from "../../assets/img/2.jpg";
import img6 from "../../assets/img/4.jpg";
import img7 from "../../assets/img/6.jpg";
import img8 from "../../assets/img/7.jpg";
import img9 from "../../assets/img/8.jpg";
// import img10 from "../../assets/img/9.jpg";
// import img11 from "../../assets/img/5.jpg"
import img12 from "../../assets/img/11.jpg"

const Gallery = () => {
  return ( 
      <section className='bg-black mt-40'>
        <Fade 
          duration={2000}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-6 md:m-20">
            <div className="grid gap-4">
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img1} 
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img12} 
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img3} 
                  alt="Woman" 
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img4}
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img5}
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img6} 
                  alt="Woman" 
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img7} 
                  alt="Woman"
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img8} 
                  alt="Woman"
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img9} 
                  alt="Woman" 
                />
              </div>
            </div>

            {/* <div className="grid gap-4">
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img2} 
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img11} 
                  alt="Woman" 
                />
              </div>
              <div>
                <img 
                  className="h-auto max-w-full rounded-lg" 
                  src={img12} 
                  alt="Woman" 
                />
              </div>
            </div> */}
          </div>
        </Fade>
      </section>
  )
}

export default Gallery;