import React, { useEffect, useState } from 'react';
import './_carousel.scss';
import { imgData } from '../../components/imgData/ImgData';
//interface ImageData permet d'identifier les elements suivants Id, alt et src
interface ImagesData {
      id: number;
      alt: string;
      src: string;
}

const Carousel = ({ interval = 4500 }) => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const images: ImagesData[] = imgData;

      useEffect(() => {
            const timer = setInterval(() => {
                  setCurrentSlide((prevSlide) =>
                        prevSlide === images.length - 1 ? 0 : prevSlide + 1
                  );
            }, interval);

            return () => {
                  clearInterval(timer);
            };
      }, []);

      return (
            <div className="carousel" id='ancre-carousel'>
                  {images.map((image, index) => (
                        <img 
                              key={image.id + index}
                              src={image.src} 
                              alt={image.alt}
                              className={index === currentSlide ? 'active' : 'no-active'} 
                        />
                  ))}
            </div>
      );
};

export default Carousel;