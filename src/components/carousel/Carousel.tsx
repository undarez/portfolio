// import React, {useState} from 'react'
// import './_carousel.scss'
//

import React, { useEffect, useState } from 'react';
import './_carousel.scss';
import ImageData from '../../json/ImageData.json';
// import { ReactComponent as ChevronG } from '../../asset/chevronGauche.svg';
// import { ReactComponent as ChevronD } from '../../asset/chevronDroite.svg';

interface CarouselProps {
      interval?: number;
}

interface ImagesData {
    id: number;
    alt: string;
    src: string

}

const Carousel: React.FC<CarouselProps> = ({ interval = 3000 }) => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const images: ImagesData[] = ImageData;

      useEffect(() => {
            const timer = setInterval(() => {
                  setCurrentSlide((prevSlide) =>
                        prevSlide === images.length - 1 ? 0 : prevSlide + 1
                  );
            }, interval);

            return () => {
                  clearInterval(timer);
            };
      }, [images.length, interval]);

      return (
            <div className="carousel">
                  {images.map((image, index) => (
                        <img 
                              key={image.id}
                              src={image.src}
                              alt={image.alt}
                              className={index === currentSlide ? 'active' : 'dimImage'}
                        />
                  ))}
            </div>
      );
};

export default Carousel;

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0)

//           // function page suivante
//           const slideleft = () => {
//             setCurrentIndex(currentIndex - 1);

//             if (currentIndex === 0) {
//                   setCurrentIndex(props.src.length - 1);
//             }
//       };
//       // function page precedente
//       const slideright = () => {
//             setCurrentIndex(currentIndex + 1);
//             if (currentIndex === props.src.length - 1) {
//                   setCurrentIndex(0);
//             }
//       };
//   return (
//     <div>
//         <div className="slider">
//                   {/*short circuit permet grace à la condition d'éffacer les chevron ainsi que les chiffre des images si il ya q'une seule image  */}
//                   {props.src.length > 1 && (
//                         <>
//                               {/* bouton droite */}
//                               <p className="chiffre">
//                                     {currentIndex + 1}/{props.src.length}
//                               </p>
//                               <div className="position-chevron">
//                                     {/* bouton gauche */}
//                                     <button
//                                           onClick={slideleft}
//                                           className="btn-arrowG"
//                                     >
//                                           <ChevronG />
//                                     </button>
//                                     <button
//                                           onClick={slideright}
//                                           className="btn-arrowD"
//                                     >
//                                           <ChevronD />
//                                     </button>
//                               </div>
//                         </>
//                   )}
//                   <img
//                         className="img-slider"
//                         src={props.src[currentIndex]}
//                         alt={props.alt}
//                   />
//             </div>

//     </div>
//   )
// }

// export default Carousel
